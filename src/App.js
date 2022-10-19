import Header from './components/header/Header';
import './App.css';
import CreateTodo  from './components/create-todo/CreateTodo';
import TodoItem from './components/Todo-item/TodoItem';

function App() {
  return (
    <div className="App">
    <Header/>
        <div className='content'>
          <CreateTodo/>
          <div>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            
          </div>          
        </div>
    </div>
  );
}

export default App;
