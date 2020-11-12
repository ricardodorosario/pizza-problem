import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../config/reducer";
import VotePage from "../app/votePage/VotePage";

describe("VotePage Component", () => {
  function setup() {
    const mockStore = createStore(reducer, {
      loggedIn: true,
      userLogged: "Mario",
      votes: 0,
    });
    const wrapper = () =>
      mount(
        <Provider store={mockStore}>
          <VotePage />
        </Provider>
      );

    return wrapper();
  }
  it("should show user information and times liked", () => {
    const wrapper = setup();
    expect(wrapper.find("h2.vote-text")).toHaveText(
      "Hi Mario! You liked it 0 times! :("
    );
  });
  it("should render like button", () => {
    const wrapper = setup();
    expect(wrapper.find("button.like-button").exists()).toBeTruthy();
  });
});
