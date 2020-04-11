import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="card card-body d-card">{children}</div>;
};

export default Card;
