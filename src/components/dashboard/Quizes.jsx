import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getTests,
  getTestDetails,
  cleanSingleTestDetails,
} from "../../redux/actions/test";
import TestDetail from "../shared/TestDetail";
import Loading from "../shared/Loading";
import RenderTest from "../shared/RenderTest";
import { showModal, hideModal } from "../../redux/actions/modal";
import CustomModal from "../modal/Modal";
import ShowTestDetails from "./ShowTestDetails";

const Quizes = ({ history }) => {
  const {
    auth: { token },
    test: { tests, singleTest },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const localToken = localStorage.getItem("token");
  useEffect(() => {
    if (!localToken && !token) {
      history.push("/login");
    }

    if (singleTest) {
      dispatch(showModal());
    }

    const authorizationToken = localToken || token;
    dispatch(getTests(authorizationToken));
  }, [token, localToken, singleTest]);

  if (tests !== null && !tests.length) {
    return <Loading />;
  }

  if (!tests) {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-center text-muted">No Test Found</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleClick = (testId) => {
    const authorizationToken = localToken || token;
    dispatch(getTestDetails(authorizationToken, testId));
  };

  const closeModal = () => {
    dispatch(hideModal());
    dispatch(cleanSingleTestDetails());
  };

  return (
    <div className="container py-4">
      <div className="row">
        {tests && (
          <div className="row">
            {tests.map((test) => (
              <div
                key={test._id}
                className="cursor-pointer col-12 mb-4 quiz-test-details"
                onClick={() => handleClick(test._id)}
              >
                <TestDetail
                  testName={test.testName}
                  marks={test.marks}
                  testTime={test.testName}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {singleTest && (
        <CustomModal>
          <ShowTestDetails closeModal={closeModal} />
        </CustomModal>
      )}
    </div>
  );
};

export default Quizes;
