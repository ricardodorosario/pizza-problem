import React, { Component } from "react";
import { connect } from "react-redux";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import MainPage from "../mainPage/MainPage";
import VotePage from "../votePage/VotePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <AppHeader />
        {this.props.loggedIn ? <VotePage /> : <MainPage />}
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loggedIn: state.loggedIn };
};
const mapDispatchToProps = null;

App.proptypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
