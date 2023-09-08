import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { user } = this.props;
    // const user = this.props.user;
    console.log(user);
    return (
      <div>
        {user.map((item, index) => {
            console.log(index)
          return (
            <div key = {item.id}> 
                <div>My name's {item.name}</div>
                <div>My age {item.age}</div>
                <hr />
            </div>
          );
        })}

        {/* <div>My name's {age}</div>
             <div>My age {name}</div>
             <hr />

             <div>My name's {age}</div>
             <div>My age {name}</div>
             <hr />

             <div>My name's {age}</div>
             <div>My age {name}</div>
             */}
      </div>
    );
  }
}

export default DisplayInfo;
