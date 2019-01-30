import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/trade">Trade</Link>
        </li>
        <li>
          <Link to="/tradeHistory">TradeHistory</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
