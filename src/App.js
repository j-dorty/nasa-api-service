import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Apod from "./pages/apod";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Neows from "./pages/neows";

export default function App() {
  return (
    <>
      <Router>
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Switch>
          <Route path="/apod">
            <Apod />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/neows">
            <Neows />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
