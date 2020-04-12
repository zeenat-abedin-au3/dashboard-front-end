import React from "react";
import parse from "html-react-parser";

const ShowOption = ({ optionName, ques }) => (
  <div
    className={`d-flex align-items-center justify-content-center options ${
      ques["answers"] === optionName ? "active" : ""
    }`}
  >
    {parse(ques[optionName])}
  </div>
);

export default ShowOption;
