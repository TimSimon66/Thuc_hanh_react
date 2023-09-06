import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponenet";
import React from "react";

class App extends React.Component {
  state = {
    name : "TimSimon66",
    age : "30",
    address : "29 Nguyen Khac Can"
  }

  handClick(){
    console.log("Click ne");
  }

  handMouse(event){
    console.log(event);
  }


  render() {
    return (
      <div>
        My name is {this.state.name} and my age {this.state.age}
        <button onClick = {this.handClick}>Click me</button>
        <button onMouseOver = {this.handMouse}>Hover me</button>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>Hello world!</p>

//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
