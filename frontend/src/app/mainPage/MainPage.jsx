import React, { Component } from "react";
import * as mainPageActions from "./MainPageActions";
import Login from "../login/Login";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-page'>
        <Login />
        <div>Teste</div>
      </div>
    );
  }
}

export default MainPage;
