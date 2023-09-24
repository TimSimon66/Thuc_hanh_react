import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponenet";
import React from "react";
import AddUserInfo from "./components/AddUserInfo";
import DisplayInfo from "./components/DisplayInfo";

// class App extends React.Component {

//   state = {
//     listUser : [
//       {id : 1, name : "TimSimon66", age : "20"},
//       {id : 2, name : "Eniqueen", age : "30"},
//       {id : 3, name : "VanTin", age : "25"},

//     ]
//   }

  
//   render() {


//     return (

//       <div className="app-container">
//         <MyComponent></MyComponent>
//       </div>

//     );
//   }
// }


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

const App = (props) => {



  // state = {
  //   listUser : [
  //     {id : 1, name : "TimSimon66", age : "20"},
  //     {id : 2, name : "Eniqueen", age : "30"},
  //     {id : 3, name : "VanTin", age : "25"},

  //   ]
  // }

    return (

      <div className="app-container">
        <MyComponent></MyComponent>
      </div>

    );
  
}

export default App;
