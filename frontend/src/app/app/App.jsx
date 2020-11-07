import React, { Component } from "react";
import * as appActions from "./AppActions";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import MainPage from "../mainPage/MainPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <AppHeader />
        <MainPage />
        <AppFooter />
      </div>
    );
  }
}

export default App;
