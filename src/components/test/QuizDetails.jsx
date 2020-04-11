import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../shared/Input";
import FormGroup from "../shared/FormGroup";
import { hideModal } from "../../redux/actions/modal";

const QuizDetails = () => {
  const dispatch = useDispatch();

  const [quizDetails, setQuizDetails] = useState({
    quizName: "",
    numQuestion: "",
    marks: "",
    quizTime: "",
  });

  const closeModal = () => {
    dispatch(hideModal());
  };

  const handleChange = (e) => {
    setQuizDetails({
      ...quizDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizDetails);

    setQuizDetails({
      quizName: "",
      numQuestion: "",
      marks: "",
      quizTime: "",
    });
  };
  const { quizName, numQuestion, marks, quizTime } = quizDetails;
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
            name="quizName"
            classNam="form-control"
            placeholder="Quiz name"
            value={quizName}
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
            name="quizTime"
            placeholder="Time alloted (mins)"
            min="1"
            value={quizTime}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="text-right form-group">
          <button
            className="btn primary-color text-uppercase text-white"
            style={{ width: "100px" }}
          >
            Start
          </button>
        </FormGroup>
      </form>
    </div>
  );
};

export default QuizDetails;
