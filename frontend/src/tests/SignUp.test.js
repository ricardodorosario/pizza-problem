import React from "react";
import { mount } from "enzyme";
import SignUp from "../app/signUp/SignUp";
import { IconButton } from "@material-ui/core";

describe("SignUp Component", () => {
  function setup(props) {
    return mount(<SignUp {...props} />);
  }
  it("should render email input", () => {
    const wrapper = setup();
    expect(wrapper.find("#email").exists()).toBeTruthy();
  });
  it("should render error message", () => {
    const wrapper = setup();
    wrapper.find("button.signup-button").simulate("click");
    expect(wrapper.find(IconButton).exists()).toBeTruthy();
  });
});
