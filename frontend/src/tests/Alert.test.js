import React from "react";
import { mount } from "enzyme";
import Alert from "../app/components/Alert";
import { IconButton } from "@material-ui/core";

describe("Alert Component", () => {
  function setup(props) {
    return mount(<Alert {...props} />);
  }
  it("should render", () => {
    const wrapper = setup({ open: true });
    expect(wrapper.find(IconButton).exists()).toBeTruthy();
  });
  it("should not render", () => {
    const wrapper = setup({ open: false });
    expect(wrapper.find(IconButton).exists()).toBeFalsy();
  });
});
