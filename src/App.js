import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/headers/NavBar";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Auth} />
      </Switch>
    </>
  );
};

export default App;
