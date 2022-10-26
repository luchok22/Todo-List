import css from './Header.module.css'
import { useState } from 'react'
const Header = (props) => {

//   const handlePlus = () =>{
//     props.onDelete(props.id)
// }

    return(
        <div className={css.wrapper}>
          <h1 className={css.title}>Todos ({props.todoDone}/{props.todolenght})</h1>    
          {/* <div>
            <button onClick={handlePlus}>minus</button>
            <h1>0</h1>
            <button>plus</button> */}
          {/* </div> */}
        </div>
    )
}

export default Header 