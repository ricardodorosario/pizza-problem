import React from "react";
import ReactDOM from "react-dom";
import Routes from "./config/routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./config/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
