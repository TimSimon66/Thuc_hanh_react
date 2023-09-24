import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   //JSX
//   state = {
//     listUser : [
//       {id : 1, name : "TimSimon66", age : "16"},
//       {id : 2, name : "Eniqueen", age : "30"},
//       {id : 3, name : "VanTin", age : "69"},

//     ]
//   }

//   handleNewUser = (userObject) => {
//     // console.log(userObject);
//     this.setState({
//       listUser: [userObject, ...this.state.listUser],
//     })
//   }

//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUser
//     listUserClone = listUserClone.filter(item => item.id !== userId)
//     this.setState({
//       listUser : listUserClone
//     })
//   }
//   // DRY : don't repeat yourself
//   render() {
//     return (

//       <>

//       <div className="a">
//       <AddUserInfo handleNewUser={this.handleNewUser}></AddUserInfo>
//       <br />
//       <br />
//       <DisplayInfo
//       user = {this.state.listUser}
//       handleDeleteUser = {this.handleDeleteUser}
//       ></DisplayInfo>
//       </div>

//       <div className="b">

//       </div>

//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  //JSX

  const [listUser, setListUser] = useState(
    [
      { id: 1, name: "TimSimon66", age: "16" },
      { id: 2, name: "Eniqueen", age: "30" },
      { id: 3, name: "VanTin", age: "69" },
    ],
  );

  const handleNewUser = (userObject) => {
    // console.log(userObject);
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone)
  };

  // DRY : don't repeat yourself
  return (
    <>
      <div className="a">
        <AddUserInfo handleNewUser={handleNewUser}></AddUserInfo>
        <br />
        <br />
        <DisplayInfo
          user={listUser}
          handleDeleteUser={handleDeleteUser}
        ></DisplayInfo>
      </div>

      <div className="b"></div>
    </>
  );
};

export default MyComponent;
