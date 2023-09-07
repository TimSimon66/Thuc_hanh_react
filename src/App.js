import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponenet";
import React from "react";
import UserInfo from "./components/UserInfo";
import DisplayInfo from "./components/DisplayInfo";

class App extends React.Component {

  render() {

    return (

      <div>
        <UserInfo />
        <br></br>
        <br></br>
        <DisplayInfo name = "Hoi dan IT" age = "30"/>  
        <hr></hr>
        <DisplayInfo name = "Eric" age = "26"/>  
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
