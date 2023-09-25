import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg"
// class DisplayInfo extends React.Component {

//   render() {
//     console.log('>> Call me render')
//     const { user } = this.props;
//     // const user = this.props.user;
//     // console.log(user);
//     return (

//       <div className="display-infor-container">

//       {true &&
//        <>
//         {user.map((item, index) => {
//           {/* console.log(user); */}

//           return (
    
//             <div key={item.id} className= {+item.age > 18 ? "green" : "red"}>
//               <div>My name's {item.name}</div>
//               <div>My age {item.age}</div>

//               <button onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
//               <hr />
//             </div>
            
//           );
//         })}
//       </>}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { user } = props;
  // console.log(user)
  
  const[hideShowUser, setHideShowUser] = useState(true);

  const handlShowHideListUser = () => {
    setHideShowUser(!hideShowUser);
  }

  console.log(">> Call me render")

  useEffect(
    () => {
    // setTimeout(() => {
    //   document.title = "Eric & Hoi Dan IT"
    // }, 3000)

    if(user.length === 0){
        alert("You deleted all the user");
  }

  console.log(">> Call me useEffect")
  
  }, [user]
  );


    return (
      <div className="display-infor-container">

      <div>
        <span onClick={() => handlShowHideListUser()}>{hideShowUser ? "Hide user" : "Show user"}</span>
      </div>

      {hideShowUser &&
       <>
        {user.map((item, index) => {
          {/* console.log(user); */}

          return (
    
            <div key={item.id} className= {+item.age > 18 ? "green" : "red"}>
              <div>My name's {item.name}</div>
              <div>My age {item.age}</div>

              <button onClick={() => props.handleDeleteUser(item.id)}>Delete</button>
              <hr />
            </div>
            
          );
        })}
      </>}
      </div>
    );
  
}

export default DisplayInfo;
