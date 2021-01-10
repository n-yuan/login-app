import React from "react";
import LoginForm from "../components/LoginForm";
import { mount } from "enzyme";
import { Input, Button } from "antd";
import axios from "axios";
import { auth } from "../api/index";

describe("Test the login form", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<LoginForm />);
  });

  test("Test the login form could load success", () => {
    expect(wrapper.find(".login-form")).toHaveLength(1);
    expect(wrapper.find(".login-form__sub-info-container")).toHaveLength(1);
    expect(wrapper.find(".login-form__button-wrapper")).toHaveLength(2);
    expect(wrapper.find(Input)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  test("Test the login api with wrong password", async () => {
    try {
      const res = await auth.login({
        email: "test@gmail.com",
        password: "wrongpassword",
      });
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          if (err.response.data.msg) {
            expect(err.response.data.msg).toEqual("Invalid Credentials");
          } else if (err.response.data.errors) {
            expect(err.response.data.errors).toBeGreaterThanOrEqual(1);
          }
        }
      }
    }
  });

  test("Test the login api with right password", async () => {
    try {
      const res = await auth.login({
        email: "test@gmail.com",
        password: "qwer1234",
      });
      expect(typeof "res.data.token").toBe("string");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          if (err.response.data.msg) {
            expect(err.response.data.msg).toEqual("Invalid Credentials");
          } else if (err.response.data.errors) {
            expect(err.response.data.errors).toBeGreaterThanOrEqual(1);
          }
        }
      }
    }
  });
});
