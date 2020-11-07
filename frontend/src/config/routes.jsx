import React, { Component } from "react";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import App from "../app/App";

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={App}></Route>
      </HashRouter>
    );
  }
}
