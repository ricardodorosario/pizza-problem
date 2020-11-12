import React from "react";
import { mount } from "enzyme";
import Login from "../app/mainPage/login/Login";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../config/reducer";
import { IconButton } from "@material-ui/core";

describe("Login Component", () => {
  function setup(props) {
    const mockStore = createStore(reducer, { count: 0 });
    const getWrapper = () =>
      mount(
        <Provider store={mockStore}>
          <Login />
        </Provider>
      );
    return getWrapper();
  }
  it("should not render error message", () => {
    const wrapper = setup();
    expect(wrapper.find(IconButton).exists()).toBeFalsy();
  });
  it("should render error message", () => {
    const wrapper = setup();
    wrapper.find("button.login-button").simulate("click");
    expect(wrapper.find(IconButton).exists()).toBeTruthy();
  });
  it("should render signup modal", () => {
    const wrapper = setup();
    wrapper.find("button.signup-button").simulate("click");
    expect(wrapper.find("#email").exists()).toBeTruthy();
  });
});
