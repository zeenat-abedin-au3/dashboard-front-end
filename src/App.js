import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./components/headers/NavBar";
import Auth from "./components/auth/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Quizes from "./components/dashboard/Quizes";

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const localToken = localStorage.getItem("token");
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" exact component={Auth} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/quizes" exact component={Quizes} />
        <Redirect to={`${localToken || token ? "/dashboard" : "/login"}`} />
      </Switch>
    </>
  );
};

export default App;
