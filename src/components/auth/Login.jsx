import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Input from "../shared/Input";
import { login } from "../../redux/actions/auth";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken || token) {
      history.push("/dashboard");
    }
  }, [token]);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(login(email, password));
    // setUser({
    //   email: "",
    //   password: ""
    // })
  };
  const { email, password } = user;
  return (
    <form onSubmit={handleSubmit} id="login" className="custom-input-group">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        classNam="input-field"
        style={{ margin: "15px 0" }}
        value={email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        classNam="input-field"
        style={{ margin: "15px 0" }}
        value={password}
        onChange={handleChange}
        required
      />
      <input
        type="submit"
        value="Log in"
        className="submit-button"
        style={{ marginTop: "40px" }}
      />
    </form>
  );
};

export default withRouter(Login);
