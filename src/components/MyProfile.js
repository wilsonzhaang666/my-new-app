import React from "react";

class MyProfile extends React.Component {
  render() {
    return (
      <div>
        <h1 className="display-4">My Profile</h1>
        <h4><strong>Hello {this.props.username}!</strong></h4>
      </div>
    );
  }
}

export default MyProfile;
