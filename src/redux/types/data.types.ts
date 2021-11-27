import { Person } from "../../models/person";
import { DataActionTypes } from "../actionTypes/data_action.types";

export interface InitialDataState {
  loading: boolean;
  persons: Person[];
  error: string | null;
}

export interface GET_DATA_SUCCESS_PAYLOAD {
  persons: Person[];
}

export interface GET_DATA_ERROR_PAYLOAD {
  error: string;
}

export interface GET_DATA_REQUEST {
  type: typeof DataActionTypes.REQUEST;
}

export type GET_DATA_SUCCESS = {
  type: typeof DataActionTypes.SUCCESS;
  payload: GET_DATA_SUCCESS_PAYLOAD;
};

export type GET_DATA_ERROR = {
  type: typeof DataActionTypes.ERROR;
  payload: GET_DATA_ERROR_PAYLOAD;
};

export type DataActions = GET_DATA_REQUEST | GET_DATA_SUCCESS | GET_DATA_ERROR;
