import { all, fork } from "redux-saga/effects";
import dataSaga from "./data-saga/data.saga";

export function* rootSaga() {
  yield all([fork(dataSaga)]);
}
