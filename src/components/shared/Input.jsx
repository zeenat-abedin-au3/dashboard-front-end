import React from "react";
import "./input.css";
const Input = ({ classNam, ...otherProps }) => (
  <input {...otherProps} className={classNam} />
);

export default Input;
