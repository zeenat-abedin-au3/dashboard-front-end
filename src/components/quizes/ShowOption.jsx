import React from "react";
import parse from "html-react-parser";

const ShowOption = ({ optionName, ques }) => (
  <div className="d-flex align-items-center justify-content-center options">
    {ques["answers"] === optionName ? (
      <i className="fas fa-check-circle mr-2 check-icon"></i>
    ) : (
      <i className="far fa-circle mr-2 check-icon"></i>
    )}
    {parse(ques[optionName])}
  </div>
);

export default ShowOption;
