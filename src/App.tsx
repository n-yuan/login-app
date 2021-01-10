import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/Login";
import MockPage from "./pages/MockPage";
import navbarConfig from "./components/config/NavConfig.json";

function App() {
  return (
    <Router>
      <div>
        <Navbar navConfig={navbarConfig} />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mockpage/:id" component={MockPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
