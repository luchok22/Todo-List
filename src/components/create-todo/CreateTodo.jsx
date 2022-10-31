import css from './CreateTodo.module.css'
import { useState } from 'react'
const CreateTodo = (props) => {

    const [inpValue, setValue] = useState("")
    const submit = (event) => {
       event.preventDefault();

       props.AddTodos(inpValue);
       setValue("")
    }
    const handleInput = (event) =>{
          setValue(event.target.value)
    }

    return(
        <form onSubmit={submit} className={css.CreateTodo}>
        <input type="text" value={inpValue} onChange={handleInput} placeholder="Enter todo here" />
        <button>+Submit</button>
        </form>
    )
}

export default CreateTodo