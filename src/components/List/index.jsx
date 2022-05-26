import ListItem from "../ListItem"
import s from './style.module.sass'

export default function List({data, removeFunc}){
  return(
    <div className={s}>
      <h1>All Posts</h1>
      <ul>
        {data.map((item => {
          return(
            <ListItem 
              key={item.id} 
              post={item}
              removePost={removeFunc}
            /> 
          )
        }))}
      </ul>
    </div>
  )
}