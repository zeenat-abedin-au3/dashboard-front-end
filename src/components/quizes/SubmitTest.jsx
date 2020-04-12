import React from "react";
import { useSelector } from "react-redux";
import RenderTest from "../shared/RenderTest";

import "./ShowTest.css";

const SubmitTest = () => {
  const { test, question } = useSelector((state) => state);

  const questions = Object.values(question);

  return (
    <div className="container show-test">
      <div className="row">
        <RenderTest questions={questions} testDetails={test.testDetails} />
        {/* Submit test */}
        <div className="col-12 mb-3 text-center">
          <button
            className="btn primary-color text-uppercase text-white"
            style={{ width: "200px" }}
          >
            Submit test
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitTest;
