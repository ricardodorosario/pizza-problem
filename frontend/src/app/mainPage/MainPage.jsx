import React, { Component } from "react";
import pizza from "../../images/pizza.png";
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
        <div className='description'>
          <h1>Log in and show how much you love pizza!</h1>
          <img src={pizza} />
        </div>
      </div>
    );
  }
}

export default MainPage;
