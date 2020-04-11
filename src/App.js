import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/headers/NavBar";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import TextEditor from "./components/editor/TextEditor";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Auth} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/editor" component={TextEditor} />
      </Switch>
    </>
  );
};

export default App;
