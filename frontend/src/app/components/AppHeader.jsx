import React, { Component } from "react";
import logo from "../../images/slice.png";

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='Pizza' />
        <p>Do you love Pizza?</p>
      </header>
    );
  }
}

export default AppHeader;
