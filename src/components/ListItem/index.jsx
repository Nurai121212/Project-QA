import s from './style.module.sass'

export default function ListItem({post, removePost}){
  return(
    <div className={s.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => removePost(post.id)}>DELETE</button>
    </div>
  )
}