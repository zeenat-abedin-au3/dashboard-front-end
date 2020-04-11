import React, { useState } from "react";

import Input from "../shared/Input";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
  const { fullName, email, phone, password, confirmPassword } = user;
  return (
    <form onSubmit={handleSubmit} id="register" className="custom-input-group">
      <Input
        type="text"
        name="fullName"
        placeholder="Full Name"
        classNam="input-field"
        style={{ margin: "10px 0" }}
        onChange={handleChange}
        value={fullName}
        required
      />
      <Input
        type="text"
        name="phone"
        placeholder="Number"
        classNam="input-field"
        minLength="10"
        maxLength="10"
        style={{ margin: "10px 0" }}
        onChange={handleChange}
        value={phone}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        classNam="input-field"
        style={{ margin: "10px 0" }}
        onChange={handleChange}
        value={email}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        classNam="input-field"
        style={{ marghekin: "10px 0" }}
        onChange={handleChange}
        value={password}
        required
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        classNam="input-field"
        style={{ margin: "10px 0" }}
        onChange={handleChange}
        value={confirmPassword}
        required
      />

      <input
        type="submit"
        value="Register"
        className="submit-button"
        style={{ marginTop: "15px" }}
      />
    </form>
  );
};

export default Register;
