import css from './Header.module.css'
import { useState } from 'react'
const Header = (props) => {

const [num, setNum] = useState(0)
const HandlePLus = () => {
  setNum(Number(num + 1))
}


    return(
        <div className={css.wrapper}>
          <h1 className={css.title}>Todos ({props.todoDone}/{props.todolenght})</h1>    
        </div>
    )
}

export default Header 