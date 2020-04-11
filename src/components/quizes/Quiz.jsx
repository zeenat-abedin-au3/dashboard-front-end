import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import QuizDetails from "./QuizDetails";
import CreateQuestions from "./CreateQuestions";

const Quiz = () => {
  const {
    quizDetails: { numQuestion },
  } = useSelector((state) => state.quiz);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(numQuestion);
  }, [numQuestion]);

  if (!step) {
    return <QuizDetails />;
  }
  return <CreateQuestions />;
};

export default Quiz;
