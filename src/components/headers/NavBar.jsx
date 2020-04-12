import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../images/logo.png";
import { logout } from "../../redux/actions/auth";

const NavBar = ({ history }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const localToken = localStorage.getItem("token");

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-light  navbar-expand-sm bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="mytutor247.in" className="img-fluid logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            {(localToken || token) && (
              <li className="nav-item dashboard-link mr-2">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            )}
            {localToken || token ? (
              <li className="nav-item" onClick={handleLogout}>
                <span className="btn btn-login btn-outline-color">Logout</span>
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

export default withRouter(NavBar);
