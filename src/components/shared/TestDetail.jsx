import React from "react";

const TestDetail = ({ testName, marks, testTime }) => (
  <div className="card card-body flex-column flex-md-row justify-content-between align-items-center">
    <h5 className="mb-2 mb-md-0 test-name">
      <i className="fas fa-file-alt mr-2"></i>
      <span className="text-muted">Test name: </span>
      <span className="text-dark font-weight-bold">{testName}</span>
    </h5>
    <p className="mb-2 mb-md-0">
      <i className="fas fa-star-of-life mr-2"></i>
      <span className="text-muted">Total Mark: </span>
      <span className="text-dark font-weight-bold">{marks}</span>
    </p>
    <p className="mb-2 mb-md-0">
      <i className="far fa-clock mr-2"></i>
      <span className="text-muted">Total time: </span>
      <span className="text-dark font-weight-bold">{testTime}</span>
    </p>
  </div>
);

export default TestDetail;
