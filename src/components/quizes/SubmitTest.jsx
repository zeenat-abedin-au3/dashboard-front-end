import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SubmitTest = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <h3 className="text-muted text-center">Submit Here</h3>
    </div>
  );
};

export default SubmitTest;
