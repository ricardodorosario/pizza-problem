import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import Routes from "./config/routes";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./config/reducer";
import thunk from "redux-thunk";

const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
