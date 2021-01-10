import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Login from "../pages/Login";
import MockPage from "../pages/MockPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/mockpage/:id" component={MockPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
