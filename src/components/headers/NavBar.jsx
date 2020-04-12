import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../images/logo.png";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const localToke = localStorage.getItem("token");
  return (
    <div>
      <nav className="navbar navbar-light  navbar-expand-sm bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="mytutor247.in" className="img-fluid logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dashboard-link mr-2">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            {localToke || token ? (
              <li className="nav-item">
                <a className="btn btn-login btn-outline-color">Logout</a>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-login primary-color" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
