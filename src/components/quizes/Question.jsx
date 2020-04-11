import React from "react";

const Question = ({ questionName, mulName }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <h3 className="text-center text-muted">{mulName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Question;
