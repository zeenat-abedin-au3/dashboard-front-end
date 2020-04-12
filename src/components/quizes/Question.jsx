import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TextEditor from "../editor/TextEditor";
import Option from "./Option";
import { setQuestion, selectedAnswer } from "../../redux/actions/test";
import { slugify } from "../../util/createStep";
import { hideModal } from "../../redux/actions/modal";

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

  const handleCheck = (opName) => {
    dispatch(selectedAnswer(questionName, slugify(opName)));
  };
  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="row">
            {/* Multiple choice name */}
            <div className="col-12">
              <h3 className="text-center text-muted mul-choice-name">
                {mulName}
                <span className="float-right">
                  <i
                    onClick={closeModal}
                    className="far fa-times-circle text-danger cursor-pointer"
                  ></i>
                </span>
              </h3>
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
              checked={question[questionName]["answers"] === "option-1"}
              handleCheck={handleCheck}
            />
            <Option
              optionName="Option 2"
              name={`option-2`}
              handleChange={handleChange}
              value={question[questionName]["option-2"]}
              checked={question[questionName]["answers"] === "option-2"}
              handleCheck={handleCheck}
            />
            <Option
              optionName="Option 3"
              name={`option-3`}
              handleChange={handleChange}
              value={question[questionName]["option-3"]}
              checked={question[questionName]["answers"] === "option-3"}
              handleCheck={handleCheck}
            />
            <Option
              optionName="Option 4"
              name={`option-4`}
              handleChange={handleChange}
              value={question[questionName]["option-4"]}
              checked={question[questionName]["answers"] === "option-4"}
              handleCheck={handleCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
