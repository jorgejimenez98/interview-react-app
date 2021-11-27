import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../redux/reducers/root.reducers";
import { get_data_request } from "../redux/actions/data.actions";
/* Components */
import { Loader, Message } from "../components";

function Home() {
  const dispatch = useDispatch();

  const { loading, persons, error } = useSelector(
    (state: RootStateType) => state.data
  );

  console.log("Persons", persons);

  useEffect(() => {
    dispatch(get_data_request());
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <React.Fragment>
          <div className="text-center">All is ok for now</div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Home;
