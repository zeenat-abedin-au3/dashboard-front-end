import React, { Fragment } from "react";
import ShowOption from "../quizes/ShowOption";
import parse from "html-react-parser";

const RenderTest = ({ questions, testDetails }) => {
  const { testName, marks, testTime } = testDetails;
  return (
    <Fragment>
      {/* test details */}
      <div className="col-12 mb-3">
        <div className="card card-body flex-row justify-content-between align-items-center">
          <h5 className="m-0">
            <i className="fas fa-file-alt mr-2"></i>
            <span className="text-muted">Test name: </span>
            <span className="text-dark font-weight-bold">{testName}</span>
          </h5>
          <p className="m-0">
            <i className="fas fa-star-of-life mr-2"></i>
            <span className="text-muted">Total Mark: </span>
            <span className="text-dark font-weight-bold">{marks}</span>
          </p>
          <p className="m-0">
            <i className="far fa-clock mr-2"></i>
            <span className="text-muted">Total time: </span>
            <span className="text-dark font-weight-bold">{testTime}</span>
          </p>
        </div>
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
