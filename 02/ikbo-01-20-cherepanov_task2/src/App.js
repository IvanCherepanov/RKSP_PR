import './App.css';
import { useState } from "react";
import TodoListItem from "./TodoListItem";
function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");


    const addTodo = () =>{
      if (todo !== ""){
          setTodos([...todos,todo])
          setTodo("")
          console.log(todos)
      }

    };

    const deleteTodo = (deleted_todo) =>{
        const newTodos = todos.filter((todo) => {
           return todo != deleted_todo;
        });
        setTodos(newTodos);
    }

  return (
    <div className="App">
      <h1>R_Todo list</h1>
        <TodoListItem todo={todo} setTodo={setTodo} addTodo={addTodo}/>
    <Output todos_={todos} myfunc={deleteTodo}/>


    </div>
  );
}

function Output(props){
    console.log(props.todos_)
    const is_full = props.todos_.length > 0;
    console.log(is_full)

    const list_todos = props.todos_;
    if (is_full){
        return (
            <ul className="todo-list">
                {list_todos.map((todo, index) => (
                    <div className="todo">
                        <li key={index}> {todo} </li>

                        <button
                            className="delete-button"
                            onClick={() => {props.myfunc(todo);}}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
        );
    }else{
        return (
            <div className="empty">
                <p>No task found</p>
            </div>
        );
    }
}

function Header(){
  return(
      <header className='header'>
        <img
            src='https://www.mirea.ru/upload/medialibrary/281/IIT_colour.jpg'
        />
      </header>
  );
}

function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}


export default App;
