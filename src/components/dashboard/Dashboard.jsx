import React from "react";

import Card from "../card/Card";
import createQuiz from "../../images/create_quiz.png";
import quiz from "../../images/quiz.png";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <div className="d-flex flex-column justify-content-evenly align-items-center create-quiz-card cursor-pointer">
                <h3 className="text-center text-muted">Create Quiz</h3>
                <img
                  src={createQuiz}
                  className="img-fluid create-quiz"
                  alt="create quiz"
                />
              </div>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <div className="d-flex flex-column justify-content-evenly align-items-center create-quiz-card cursor-pointer">
                <h3 className="text-center text-muted">All Quizes</h3>
                <img
                  src={quiz}
                  className="img-fluid create-quiz"
                  alt="create quiz"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
