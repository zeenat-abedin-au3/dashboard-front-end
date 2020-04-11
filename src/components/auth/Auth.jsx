import React, { useState, Fragment } from "react";

import Login from "./Login";
import Register from "./Register";

import "./Auth.css";

const Auth = () => {
  const [toggle, setToggle] = useState("login");
  const btnStyle = {
    left: toggle === "login" ? "0px" : "110px",
  };

  return (
    <Fragment>
      <div id="auth">
        <div className="form-box">
          <div className="button-box">
            <div id="btn" style={btnStyle}></div>
            <button className="toggle-btn" onClick={() => setToggle("login")}>
              Log In
            </button>
            <button
              className="toggle-btn"
              onClick={() => setToggle("register")}
            >
              Register
            </button>
          </div>
          {toggle === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
