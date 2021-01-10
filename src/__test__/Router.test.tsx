import React from "react";
import App from "../App";
import Routes from "../routes/Routes";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import MockPage from "../pages/MockPage";
import NotFound from "../pages/NotFound";

describe("Testing", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("Render the ttile of Login App", () => {
    expect(wrapper.find("h1").text()).toContain("Home page");
  });
});

describe("Test router for each page", () => {
  let wrapper: any;

  test("Test router for Home page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  test("Test router for About page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(About)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  test("Test router for Notfound page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test("Test router for Login page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  test("Test router for Mock page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/mockpage/1"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(MockPage)).toHaveLength(1);
  });
});
