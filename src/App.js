import Header from './components/header/Header';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import TodoItem from './components/Todo-item/TodoItem';
import { useEffect, useState } from 'react';


const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [todos, setTodos] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const onChecked = (id) => {
    const newStatus = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }
      }
      return todo
    })
    setTodos(newStatus)
  }
  
  const onEdit = (id, newText) => {
    const newArrText = todos.map((todo) => {
      if(todo.id === id){
        return {...todo, text: newText}
      }
      return todo
    })
    setTodos(newArrText)
  }

  const newTodos = todos.map((item) => <TodoItem key={item.id} onEdit={onEdit}  id={item.id} onChecked={onChecked} text={item.text} status={item.status} onDelete={onDelete} />)

  const AddTodos = (str) => {
    setTodos([{ text: str, status: false, id: Date.now() }, ...todos,])
  }

  const todoDone = todos.reduce((akk, item) => {
    return akk + Number(item.status)
  }, 0)


  return (
    <div className="App">
      <Header todolenght={todos.length} todoDone={todoDone} />
      <div className='content'>
        <CreateTodo AddTodos={AddTodos} />
        <div className='content_body'>
          {newTodos}
          {/* <TodoItem text="купить помидоры" status={false}/>
            <TodoItem text="купить майонез" status={true}/>
            <TodoItem text="купить огурцы" status={true}/>
            <TodoItem text="купить картошку"status={false}/>   */}
        </div>
      </div>
    </div>
  );
}

export default App;
