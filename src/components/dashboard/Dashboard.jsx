import React from "react";
import { useDispatch } from "react-redux";

import DashboardCard from "./DashboardCard";
import Modal from "../modal/Modal";
import createQuiz from "../../images/create_quiz.png";
import quiz from "../../images/quiz.png";

import "./Dashboard.css";
import { showModal } from "../../redux/actions/modal";
import Quiz from "../quizes/Quiz";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <div className="container py-5">
        <div className="row pb-3">
          <div className="col-12">
            <h4 className="text-left">
              <span className="text-dark">Welcome Back, </span>{" "}
              <span className="text-muted">John</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <DashboardCard
            onClick={() => dispatch(showModal())}
            cardHeader="Create Quiz"
            cardImage={createQuiz}
          />
          <DashboardCard cardHeader="All Quizes" cardImage={quiz} />
          <Modal>
            <Quiz />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
