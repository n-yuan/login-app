import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <div className="page-header__wrapper">
        <h1 className="page-header__text">Not Found</h1>
      </div>
      <div className="text-center">
        <p>The page you are looking for does not exist...</p>
      </div>
    </div>
  );
};

export default NotFound;
