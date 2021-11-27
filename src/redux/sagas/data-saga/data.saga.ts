import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Person } from "../../../models/person";
import { get_data_error, get_data_success } from "../../actions/data.actions";
import { DataActionTypes } from "../../actionTypes/data_action.types";

const apiUrl =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
const getPosts = () => axios.get<Person[]>(apiUrl);

function* getDataSaga() {
  try {
    const response = yield call(getPosts);
    yield put(
      get_data_success({
        persons: response.data,
      })
    );
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    yield put(
      get_data_error({
        error: errorMessage,
      })
    );
  }
}

function* dataSaga() {
  yield all([takeLatest(DataActionTypes.ERROR, getDataSaga)]);
}

export default dataSaga;
