import React, { Component } from "react";
import loading from "./style/loading.gif";

/**
 * Creates a list of panels to show into the app
 */
class Loading extends Component {
  render() {
    return (
      <div data-testid='loading' className='loading'>
        <img src={loading} alt='Loading...' />
      </div>
    );
  }
}

Loading.proptypes = {};

export default Loading;
