import axios from "axios";
import { useState, useEffect } from 'react';
import List from "./components/List";
import Preloader from "./components/Preloader";

import loadGif from './assets/reload-cat.gif';
import errorGif from './assets/cat-error.gif';

const API_KEY = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_KEY)
          .then((res) => {
            setData(res.data)
          })
          .catch((error) => {
            console.error(error)
          })
          .finally(() => {
            setLoading(false)
          })
  }, []);

  const deletePost = async (id) => {
    const res = await axios.delete(`${API_KEY}/${id}`)
    if(res.status === 200){
      const newData = data.filter(item => item.id !== id);
      setData(newData);
    }
  }

  return (
    <div>
      {loading ? 
        <Preloader src={loadGif}/> 
        :
        data.length ? 
          <List data={data} removeFunc={deletePost}/> 
          : 
          <Preloader src={errorGif}/>
      }
    </div>
  );
}

export default App;