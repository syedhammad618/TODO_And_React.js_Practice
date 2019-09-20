import React, { Component } from "react";
import SignUp from "./SignUp";

class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Signup: true
    };
    this.ChangeState = this.ChangeState.bind(this);
  }
  ChangeState() {
    this.setState({ Signup: false });
  }
  render() {
    const Sign = this.state.Signup ? (
      <React.Fragment>
        <h1>Welcome Every One</h1>
        <button type="button" onClick={this.props.ClickData}>
          Login
        </button>
        <button onClick={this.ChangeState}>SignUp</button>
        <br />
        <br />
      </React.Fragment>
    ) : (
      <SignUp />
    );
    return <div>{Sign}</div>;
  }
}

export default Guest;
