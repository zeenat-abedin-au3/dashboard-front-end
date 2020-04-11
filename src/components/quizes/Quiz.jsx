import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TestDetails from "./TestDetails";
import CreateQuestions from "./CreateQuestions";

const Quiz = () => {
  const {
    testDetails: { numQuestion },
  } = useSelector((state) => state.test);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(numQuestion);
  }, [numQuestion]);

  if (!step) {
    return <TestDetails />;
  }
  return <CreateQuestions step={step} />;
};

export default Quiz;
