import React from "react";

class DisplayInfo extends React.Component {

    
    render() {
        const {age, name} = this.props;
        return(
            <div>
            {/* My name {this.props.name} */}
            My name {name}
            <br />
            {/* My age {this.props.age} */}
            My age {age}
            </div>
        )
    }
}

export default DisplayInfo