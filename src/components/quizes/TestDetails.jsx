import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../shared/Input";
import FormGroup from "../shared/FormGroup";
import { hideModal } from "../../redux/actions/modal";
import { testDetail } from "../../redux/actions/test";

const TestDetails = () => {
  const dispatch = useDispatch();

  const [testDetails, setTestDetails] = useState({
    testName: "",
    numQuestion: "",
    marks: "",
    testTime: "",
  });

  const closeModal = () => {
    dispatch(hideModal());
  };

  const handleChange = (e) => {
    setTestDetails({
      ...testDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(testDetail(testDetails));

    setTestDetails({
      testName: "",
      numQuestion: "",
      marks: "",
      testTime: "",
    });
  };
  const { testName, numQuestion, marks, testTime } = testDetails;
  return (
    <div>
      <h3 className="text-center text-muted">
        <span>Quiz Details</span>
        <span className="float-right">
          <i
            onClick={closeModal}
            className="far fa-times-circle text-danger cursor-pointer"
          ></i>
        </span>
      </h3>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="testName"
            classNam="form-control"
            placeholder="Quiz name"
            value={testName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            classNam="form-control"
            name="numQuestion"
            placeholder="Number of questions"
            min="1"
            value={numQuestion}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="marks"
            classNam="form-control"
            placeholder="Marks"
            value={marks}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            classNam="form-control"
            name="testTime"
            placeholder="Time alloted (mins)"
            min="1"
            value={testTime}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="text-right form-group">
          <button
            className="btn primary-color text-uppercase text-white"
            style={{ width: "100px" }}
          >
            Next
          </button>
        </FormGroup>
      </form>
    </div>
  );
};

export default TestDetails;
