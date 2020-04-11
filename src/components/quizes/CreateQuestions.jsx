import React from "react";
import StepZilla from "react-stepzilla";
import createSteps, { slugify } from "../../util/createStep";
import Question from "./Question";
import "./Progress.css";

const CreateQuestions = ({ step, showStep = false }) => {
  const steps = createSteps(step).map((st) => ({
    ...st,
    component: <Question mulName={st.name} questionName={slugify(st.name)} />,
  }));

  console.log(steps);

  return (
    <div className="step-progress">
      <StepZilla
        steps={steps}
        showSteps={showStep}
        backButtonCls="btn step-btn"
        nextButtonCls="btn step-btn"
      />
    </div>
  );
};

export default CreateQuestions;
