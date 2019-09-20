import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome Hammad</h1>
        <button type="button" onClick={this.props.ClickData}>
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default User;
