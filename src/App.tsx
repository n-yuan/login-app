import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import navbarConfig from "./components/config/NavConfig.json";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <div>
        <Navbar navConfig={navbarConfig} />
        <div>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
