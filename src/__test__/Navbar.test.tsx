import React from "react";
import Navbar from "../components/Navbar";
import navbarConfig from "../components/config/NavConfig.json";
import { mount } from "enzyme";
import { Menu } from "antd";
import { MemoryRouter } from "react-router-dom";

describe("Test the Navbar using config", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar navConfig={navbarConfig} />
      </MemoryRouter>
    );
  });
  test("Test the navbar could be load successful using config file", () => {
    expect(wrapper.find(Menu)).toHaveLength(1);
  });
});
