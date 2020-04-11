import React, { useState } from "react";
import QuizDetails from "./QuizDetails";
import CreateQuestions from "./CreateQuestions";

const Quiz = () => {
  const [step, setStep] = useState(1);

  if (!step) {
    return <QuizDetails />;
  }
  return <CreateQuestions />;
};

export default Quiz;
