import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light  navbar-expand-sm bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="mytutor247.in" className="img-fluid logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="btn btn-login primary-color" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
