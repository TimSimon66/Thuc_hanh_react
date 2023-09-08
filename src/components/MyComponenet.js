import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  state = {
    listUser : [
      {id : 1, name : "TimSimon66", age : "16"},
      {id : 2, name : "Eniqueen", age : "30"},
      {id : 3, name : "VanTin", age : "69"},

    ]
  }
  // DRY : don't repeat yourself
  render() {
    return (
      <div>
      <UserInfo></UserInfo>
      <br />
      <br />
      <DisplayInfo user = {this.state.listUser}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
