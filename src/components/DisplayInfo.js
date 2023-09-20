import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg"
class DisplayInfo extends React.Component {

  constructor(props) {
    console.log(">>> call me constructor: 1")
    super(props);
    this.state = {
      changeListUser : true
    }
  }




  handClickChange = () => {
    this.setState ({
      changeListUser : !this.state.changeListUser
    })
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('>> Call me didUpdate', this.props, prevProps)
    if(this.props.user !== prevProps.user) {
      if(this.props.user.length === 5){
        alert("You got 5 user")
      }
  }
}
  componentDidMount(){
    console.log('>> Call me didMont')
    setTimeout(() => {
      document.title = "Tim Hudson"
    }, 3000)
  }

  render() {
    console.log('>> Call me render')
    const { user } = this.props;
    // const user = this.props.user;
    // console.log(user);
    return (
      <div className="display-infor-container">
        {/* <img src = {logo} className="logo"/> */}
         <div> Click here to {this.state.changeListUser ? "hide" : "display"} list user <button onClick={this.handClickChange}>Click</button></div>

      {this.state.changeListUser && <>
        {user.map((item, index) => {
          {/* console.log(user); */}

          return (
    
            <div key={item.id} className= {+item.age > 18 ? "green" : "red"}>
              <div>My name's {item.name}</div>
              <div>My age {item.age}</div>

              <button onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
              <hr />
            </div>
            
          );
        })}
      </>}
      </div>
    );
  }
}

export default DisplayInfo;
