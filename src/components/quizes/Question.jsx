import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TextEditor from "../editor/TextEditor";
import { setQuestion } from "../../redux/actions/test";
import Option from "./Option";

const Question = ({ questionName, mulName }) => {
  const question = useSelector((state) => state.question);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      setQuestion(
        questionName,
        e.target.getElement().name,
        e.target.getContent()
      )
    );
  };

  return (
    <div className="container mb-5">
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
                <h5 className="text-left text-muted">Question</h5>
                <TextEditor
                  initialText="Write your question here....."
                  editorHeight="200"
                  name="question"
                  handleChange={handleChange}
                  value={question[questionName]["question"]}
                />
              </div>
            </div>
            {/* Options */}
            <Option
              optionName="Option 1"
              name={`option-1`}
              handleChange={handleChange}
              value={question[questionName]["option-1"]}
            />
            <Option
              optionName="Option 2"
              name={`option-2`}
              handleChange={handleChange}
              value={question[questionName]["option-2"]}
            />
            <Option
              optionName="Option 3"
              name={`option-3`}
              handleChange={handleChange}
              value={question[questionName]["option-3"]}
            />
            <Option
              optionName="Option 4"
              name={`option-4`}
              handleChange={handleChange}
              value={question[questionName]["option-4"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
