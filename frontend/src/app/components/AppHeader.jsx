import React from "react";
import logo from "../../images/slice.png";

/**
 * Component to show the site's header
 */

export default function AppHeader() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' title='Pizza' />
      <p>Pizza Lovers</p>
    </header>
  );
}
