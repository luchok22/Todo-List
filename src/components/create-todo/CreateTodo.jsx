import css from './CreateTodo.module.css'

const CreateTodo = () => { 
    return(
        <div className={css.CreateTodo}>
        <input type="text" placeholder="Enter todo here" />
        <button>+Submit</button>
        </div>
    )
}

export default CreateTodo