import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="page-header__wrapper">
        <h1 className="page-header__text">Login page</h1>
      </div>
      <div className="center-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
