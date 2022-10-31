import { useState } from 'react'
import css from './TodoItem.module.css'
const TodoItem = (props) => {
    const [ValueInput, setValueInput] = useState(props.text)
    const [isEdit, setEdit] = useState(false)

const handleDelete = () =>{
    props.onDelete(props.id)
}


const handleChecked = () => {   
    props.onChecked(props.id)
} 
const handleEdit = () => {
    setEdit(!isEdit)
}
const submit = (event) => {
    event.preventDefault()
    props.onEdit(props.id, ValueInput)
    setEdit(false)
}

    return (
        <div className={css.item}>
            {
               isEdit ? <form className={css.setEdit} onSubmit={submit}>
                <input value={ValueInput} type="text"  onChange={(e) =>  setValueInput(e.target.value)}/>
                <button>Save</button>
               </form> :  <label className={css.check}>
               <input type="checkbox" onChange={handleChecked} checked={props.status}/>
               <span className={props.status ? css.todoDone : ''}>{props.text}</span>
               </label>
            }
            <div className={css.get}>
            <button onClick={handleEdit} id={css.edit}>Edit</button>
            <button onClick={handleDelete} id={css.del}>Del</button>
            </div>
        </div>
    )
}

export default TodoItem