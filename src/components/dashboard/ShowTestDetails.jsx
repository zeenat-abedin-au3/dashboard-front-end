import React from "react";
import { useSelector } from "react-redux";
import RenderTest from "../shared/RenderTest";

const ShowTestDetails = ({ closeModal }) => {
  const {
    singleTest: { questions, ...testDetails },
  } = useSelector((state) => state.test);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <span className="float-right">
            <i
              onClick={closeModal}
              className="far fa-times-circle text-danger cursor-pointer"
            ></i>
          </span>
        </div>
      </div>

      <div className="row">
        <RenderTest questions={questions} testDetails={testDetails} />
      </div>
    </div>
  );
};

export default ShowTestDetails;
