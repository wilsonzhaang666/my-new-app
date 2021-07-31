import React from "react";
import logo from "../logo.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="display-4">Home</h1>
        {this.props.username !== null && <h4><strong>Hello {this.props.username}!</strong></h4>}
        <img src={logo} className="w-50" alt="logo" />
      </div>
    );
  }
}

export default Home;
