import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTests } from "../../redux/actions/test";
import TestDetail from "../shared/TestDetail";
const Quizes = ({ history }) => {
  const {
    auth: { token },
    test: { tests },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const localToken = localStorage.getItem("token");
  useEffect(() => {
    if (!localToken && !token) {
      history.push("/login");
    }

    const authorizationToken = localToken || token;
    console.log(authorizationToken);
    dispatch(getTests(authorizationToken));
  }, [token, localToken]);

  return (
    <div className="container py-4">
      <div className="row">
        {!tests ? (
          <div className="col-12 text-center">
            <h1 className="text-center text-muted">No Test Found</h1>
          </div>
        ) : (
          <div className="row">
            {tests.map((test) => (
              <div
                key={test._id}
                className="cursor-pointer col-12 mb-4 quiz-test-details"
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
    </div>
  );
};

export default Quizes;
