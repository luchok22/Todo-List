import css from './TodoItem.module.css'


const TodoItem = () => {
    return (
        <div className={css.item}>
            <div className={css.check}>
            <input type="checkbox" />
            <label htmlFor="">TodoItem</label>
            </div>
            <div className={css.get}>
            <button id={css.edit}>Edit</button>
            <button id={css.del}>Del</button>
            </div>
        </div>
    )
}

export default TodoItem