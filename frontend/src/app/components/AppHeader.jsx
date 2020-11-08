import React from "react";
import logo from "../../images/slice.png";

export default function AppHeader() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' title='Pizza' />
      <p>Pizza Lovers</p>
    </header>
  );
}
