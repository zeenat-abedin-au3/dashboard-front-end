import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import RenderTest from "../shared/RenderTest";

import "./ShowTest.css";
import { createTest } from "../../redux/actions/test";
import { hideModal } from "../../redux/actions/modal";

const SubmitTest = ({ history }) => {
  const dispatch = useDispatch();
  const {
    test,
    question,
    auth: { token },
  } = useSelector((state) => state);

  const questions = Object.values(question);

  const handleSubmit = () => {
    const authToken = localStorage.getItem("token") || token;
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
        dispatch(
          createTest(authToken, {
            ...test.testDetails,
            questions,
          })
        );
        dispatch(hideModal());
        swal("You have been created one test sucessfully", {
          icon: "success",
        });
        history.push("/dashboard");
      }
    });
  };
  console.log(history);
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

export default withRouter(SubmitTest);
