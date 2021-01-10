import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { ILogin } from "../interface/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../api/index";

const LoginForm: React.FC = () => {
  const history = useHistory();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });

  const onSubmit = () => {
    setLoading(true);
    login(loginInfo);
  };

  const login = async (loginInfo: ILogin) => {
    try {
      const res = await auth.login(loginInfo);
      if (res.data.token) {
        message.success("Login Success", 5);
      }
      setLoading(false);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          if (err.response.data.msg) {
            message.error(err.response.data.msg, 5);
          } else if (err.response.data.errors) {
            message.error(err.response.data.errors[0].msg, 5);
          }
        }
      }
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__input-wrapper">
        <Input
          placeholder="Email"
          onChange={onChange}
          name={"email"}
          value={loginInfo.email}
        />
      </div>
      <div className="login-form__input-wrapper">
        <Input.Password
          placeholder="password"
          name={"password"}
          value={loginInfo.password}
          onChange={onChange}
        />
      </div>
      <div className="login-form__button-row">
        <div className="login-form__button-wrapper ">
          <Button
            type="primary"
            loading={loading}
            onClick={() => {
              onSubmit();
            }}
            block
          >
            {loading ? "Submiting" : "Submit"}
          </Button>
        </div>
        <div className="login-form__button-wrapper pr-2">
          <Button
            block
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <div className="login-form__sub-info-container">
        <div className="text-secondary">Valid Account:</div>
        <div className="text-secondary">Email: test@gmail.com</div>
        <div className="text-secondary">Password: qwer1234</div>
      </div>
    </div>
  );
};

export default LoginForm;
