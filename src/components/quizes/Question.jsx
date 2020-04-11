import React, { useState } from "react";
import TextEditor from "../editor/TextEditor";

const Question = ({ questionName, mulName }) => {
  const [question, setQuestion] = useState({
    [questionName]: "",
  });
  const handleChange = (e) => {
    setQuestion({
      [e.target.getElement().name]: e.target.getContent(),
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="row">
            {/* Multiple choice name */}
            <div className="col-12">
              <h3 className="text-center text-muted">{mulName}</h3>
            </div>
            {/* Question Editor */}
            <div className="col-12">
              <div className="card card-body">
                <TextEditor
                  initialText="Write your question here....."
                  editorHeight="200"
                  name={questionName}
                  handleChange={handleChange}
                  value={questionName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
