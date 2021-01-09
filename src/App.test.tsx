import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("Testing", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("Render the ttile of Login App", () => {
    expect(wrapper.find("h1").text()).toContain("Login App");
  });
});
