import React, { Component } from "react";
import "./App.css";
import Login from "./login/login";
import Home from "./home/index";

class App extends Component {
  state = {
    loginFlag: false
  };

  handleLoginFlagChange = element => {
    this.setState({ loginFlag: element });
  };

  render() {
    const { loginFlag } = this.state;
    return (
      <div>
        {loginFlag ? (
          <Home />
        ) : (
          <Login onLoginFlagChange={this.handleLoginFlagChange} />
        )}
      </div>
    );
  }
}

export default App;
