import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

import RenderTest from "../shared/RenderTest";

import "./ShowTest.css";

const SubmitTest = () => {
  const { test, question } = useSelector((state) => state);

  const questions = Object.values(question);

  const handleSubmit = () => {
    swal({
      title: "Are you sure?",
      text: "Your test will be created!!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((ifYes) => {
      if (ifYes) {
        console.log(questions);
        console.log(test.testDetails);
        swal("You have been created one test sucessfully", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="container show-test">
      <div className="row">
        <RenderTest questions={questions} testDetails={test.testDetails} />
        {/* Submit test */}
        <div className="col-12 mb-3 text-center">
          <button
            className="btn primary-color text-uppercase text-white"
            style={{ width: "200px" }}
            onClick={handleSubmit}
          >
            Submit test
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitTest;
