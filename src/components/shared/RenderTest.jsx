import React, { Fragment } from "react";
import ShowOption from "../quizes/ShowOption";
import parse from "html-react-parser";
import TestDetail from "./TestDetail";

const RenderTest = ({ questions, testDetails }) => {
  const { testName, marks, testTime } = testDetails;
  return (
    <Fragment>
      {/* test details */}
      <div className="col-12 mb-3">
        <TestDetail testName={testName} marks={marks} testTime={testTime} />
      </div>
      <hr />
      {/* All questions */}
      <div className="col-12">
        <div className="row">
          {questions.map((ques, index) => (
            <div key={index} className="col-12 col-sm-6 mb-3">
              <div className="card card-body questions">
                {parse(ques.question)}
                <hr />
                <ShowOption ques={ques} optionName="option-1" />
                <ShowOption ques={ques} optionName="option-2" />
                <ShowOption ques={ques} optionName="option-3" />
                <ShowOption ques={ques} optionName="option-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default RenderTest;
