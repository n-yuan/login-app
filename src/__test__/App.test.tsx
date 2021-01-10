import React from "react";
import App from "../App";
import { mount } from "enzyme";

describe("Test the app load success", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("Test if the App will load successfully", () => {
    expect(wrapper.find("h1").text()).toContain("Home page");
  });
});
