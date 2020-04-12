import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";

import Input from "../shared/Input";
import { signup } from "../../redux/actions/auth";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const localToken = localStorage.getItem("token");
  useEffect(() => {
    if (localToken || token) {
      history.push("/dashboard");
    }
  }, [token, localToken]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      swal("Oops!", "Password didn't match", "info");
      return;
    }

    const data = { fullName, email, phone, password };
    dispatch(signup(data));
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

export default withRouter(Register);
