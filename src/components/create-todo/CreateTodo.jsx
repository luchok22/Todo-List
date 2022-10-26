import css from './CreateTodo.module.css'
import { useState } from 'react'
const CreateTodo = (props) => {

    const AddTodos = () => {
       props.onAdd(props.id)
    }

    return(
        <div className={css.CreateTodo}>
        <input type="text" placeholder="Enter todo here" />
        <button onClick={AddTodos}>+Submit</button>
        </div>
    )
}

export default CreateTodo