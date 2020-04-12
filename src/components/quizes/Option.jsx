import React from "react";
import TextEditor from "../editor/TextEditor";

const Option = ({ optionName, name, handleChange, value }) => (
  <div className="col-md-6 mt-3 pb-2">
    <h5 className="text-left text-muted">{optionName}</h5>
    <div className="d-flex align-items-center justify-content-between">
      <span className="mr-2">
        <i className="far fa-check-circle radio-icon cursor-pointer"></i>
      </span>
      <div className="flex-grow-1">
        <TextEditor
          initialText=""
          editorHeight="120"
          name={name}
          handleChange={handleChange}
          short={true}
          value={value}
        />
      </div>
    </div>
  </div>
);

export default Option;
