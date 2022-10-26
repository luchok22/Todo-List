import css from './TodoItem.module.css'

const TodoItem = (props) => {
    
const handleDelete = () =>{
    props.onDelete(props.id)
}

    return (
        <div className={css.item}>
            <label className={css.check}>
            <input type="checkbox" checked={props.status}/>
            <span>{props.text}</span>
            </label>
            <div className={css.get}>
            <button id={css.edit}>Edit</button>
            <button onClick={handleDelete} id={css.del}>Del</button>
            </div>
        </div>
    )
}

export default TodoItem