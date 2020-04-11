import React, { useState } from "react";

import Input from "../shared/Input";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
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

export default Login;
