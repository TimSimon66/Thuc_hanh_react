
import React from "react";
import './components/Todo/Todo_do.css';
import TodoNew from "./components/Todo/TodoNew";
import TodoData from "./components/Todo/TodoData";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoData] = useState([
    // { id: 1, name: "Tin", address: "Da Nang City", age: 20 },
    // { id: 2, name: "Bin", address: "Da Nang City", age: 18 },
  ]);

  // const name = "tin"
  const addNewTodo = (name) => {
    const newTodo = {
      id: 3,
      name: name
    }
    setTodoData([...todoList, newTodo]);
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          todoData={todoList}
        // name={name}
        />
      </div>
    </>

  );

}

export default App;
