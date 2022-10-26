import Header from './components/header/Header';
import './App.css';
import CreateTodo  from './components/create-todo/CreateTodo';
import TodoItem from './components/Todo-item/TodoItem';
import { useState } from 'react';


const initialState = [
  {id: 1, text: "купить помидоры", status: false},
   { id:2, text: "купить яблоки", status: true},
   { id:3, text: "купить огурцы", status: true},
];

function App() {
   const onAdd = (id) => {
     const newAdd = newTodos.filter((item) => item.id += id)
     console.log(newAdd)
   }

  
  const [todos, setTodos] = useState(initialState)
  
  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }
  
  const newTodos = todos.map((item) => <TodoItem id={item.id} text={item.text} status={item.status} onDelete={onDelete}/>)

  return (
    <div className="App">
    <Header todolenght={4} todoDone={2}/>
        <div className='content'>
          <CreateTodo/>
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
