import React, { Component } from "react";

class InputForm extends Component {
  render() {
    const { name, account, onChange } = this.props;
    return (
      <input
        name={name}
        value={account[name]}
        onChange={onChange}
        id="username"
        type="text"
        className="form-control"
      />
    );
  }
}

export default InputForm;
