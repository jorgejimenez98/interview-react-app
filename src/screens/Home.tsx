import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../redux/reducers/root.reducers";
import { get_data_request } from "../redux/actions/data.actions";
/* Components */
import { Loader, Message } from "../components";
import MUIDataTable from 'mui-datatables'
import { columns, listOptions } from "../core/mui-datatable";

function Home() {
  const dispatch = useDispatch();

  const { loading, persons, error } = useSelector(
    (state: RootStateType) => state.data
  );

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
          <div className="mt-4 mb-4">
            <MUIDataTable
              title={`General List Items (${persons.length})`}
              data={persons}
              columns={columns}
              options={listOptions}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Home;
