import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../config/reducer";
import App from "../app/App";

describe("App Component", () => {
  function setup(props) {
    const mockStore = createStore(reducer, {
      loggedIn: props.loggedIn,
    });
    const wrapper = () =>
      mount(
        <Provider store={mockStore}>
          <App />
        </Provider>
      );

    return wrapper();
  }
  it("should show MainPage", () => {
    const wrapper = setup({ loggedIn: false });
    expect(wrapper.find("div.main-page")).toExist();
  });
  it("should show VotePage", () => {
    const wrapper = setup({ loggedIn: true });
    expect(wrapper.find("div.vote-page")).toExist();
  });
});
