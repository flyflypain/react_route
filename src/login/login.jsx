import React, { Component } from "react";
import axios from "axios";
import Input from "../component/input";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleLogin = async e => {
    e.preventDefault();
    const obj = {
      userName: this.state.account.username,
      password: this.state.account.password
    };
    const promise = await axios.post("http://localhost:8080/login", obj);
    const authorization = promise.headers.Authorization;
    localStorage.setItem("accesstoken", authorization);
    if (authorization) {
      this.props.onLoginFlagChange(true);
      console.log("Login successed");
    }
  };

  handleInputChange = ({ currentTarget: input }) => {
    const account = this.state.account;
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container col-4">
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              account={account}
              name="username"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              account={account}
              name="password"
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
