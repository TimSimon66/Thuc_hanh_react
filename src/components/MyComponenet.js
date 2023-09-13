import React from "react";
import AddUserInfo from "./AddUserInfo";
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

  handleNewUser = (userObject) => {
    // console.log(userObject);
    this.setState({
      listUser: [userObject, ...this.state.listUser],
    })
  }
  // DRY : don't repeat yourself
  render() {
    return (

      <>

      <div className="a">
      <AddUserInfo handleNewUser={this.handleNewUser}></AddUserInfo>
      <br />
      <br />
      <DisplayInfo user = {this.state.listUser}></DisplayInfo>
      </div>

      <div className="b">

      </div>

      </>
    );
  }
}

export default MyComponent;
