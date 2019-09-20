import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        Email: "",
        Password: "",
        Islogin: false
      };
      this.Change = this.Change.bind(this);
      this.Handler = this.Handler.bind(this);
    }
  }

  Change(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  Handler(e) {
    e.preventDefault();
    console.log(this.state.Email);
    console.log(this.state.Password);
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Email Address:
            <input
              type="Email"
              name="Email"
              value={this.state.Email}
              onChange={this.Change}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="Password"
              name="Password"
              value={this.state.Password}
              onChange={this.Change}
            />
          </label>
          <br />
          <br />

          <button onClick={this.Handler}>Click Here</button>
        </form>
      </div>
    );
  }
}
