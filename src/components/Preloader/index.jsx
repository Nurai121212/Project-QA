import s from './style.module.sass';

export default function Preloader({src}){
  let loadText= '';

  src.match('reload-cat') ? loadText = 'Loading...' : loadText = 'Not Found :('
  
  return(
    <div className={s.preloader}>
      <h1>{loadText}</h1>
      <img src={src} alt="preloader" className={s.loadImg} />
    </div>
  )
}