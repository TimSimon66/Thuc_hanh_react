import TodoData from "./components/Todo/TodoData";
import TodoNew from "./components/Todo/TodoNew";
import React from "react";
import './components/Todo/todo.css';




const App = (props) => {

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew></TodoNew>
        <TodoData></TodoData>
      </div>
    </>

  );

}

export default App;
