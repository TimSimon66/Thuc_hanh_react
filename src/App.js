import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponenet";
import React from "react";

class App extends React.Component {
  state = {
    name: "TimSimon66",
    age: "30",
    address: "29 Nguyen Khac Can",
  };

  handClick = (event) => {
    console.log("Click ne", this.state.name);

    this.setState({
      name: "HarryPoteric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handMouse(event) {
    console.log(event);
  }

  handOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    })
    console.log(event, event.target.value);
  };

  handOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and my age {this.state.age}
        <form onSubmit={(event) => this.handOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handOnChangeInput(event)}
          />

          <button>Submit</button>

        </form>
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
