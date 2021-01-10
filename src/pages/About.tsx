import React from "react";

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="page-header__wrapper">
        <h1 className="page-header__text">About This App</h1>
      </div>
      <div className="text-center">
        <p>The App to login the product</p>
        <p>Version:1.0.0</p>
      </div>
    </div>
  );
};

export default About;
