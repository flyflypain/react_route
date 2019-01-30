import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Trade from "../trade/trade";
import TradeHistory from "../trade/tradeHistory";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/trade" component={Trade} />
            <Route path="/tradeHistory" component={TradeHistory} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
