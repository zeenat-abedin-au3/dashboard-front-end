import React from "react";
import StepZilla from "react-stepzilla";

import createSteps, { slugify } from "../../util/createStep";
import Question from "./Question";
import "./Progress.css";
import SubmitTest from "./SubmitTest";

const CreateQuestions = ({ step, showStep = false }) => {
  const handleChange = (content, editor) => {
    console.log(editor.getElement().name, "---", content);
  };
  const obj = {};
  const steps = createSteps(step).map((st) => {
    obj[slugify(st.name)] = "";
    return {
      ...st,
      component: (
        <Question
          mulName={st.name}
          questionName={slugify(st.name)}
          handleChange={handleChange}
        />
      ),
    };
  });

  steps.push({
    name: "Submit Test",
    component: <SubmitTest />,
  });

  return (
    <div className="step-progress">
      <StepZilla
        steps={steps}
        showSteps={showStep}
        backButtonCls="btn step-btn"
        nextButtonCls="btn step-btn"
        nextTextOnFinalActionStep="Save"
      />
    </div>
  );
};

export default CreateQuestions;
