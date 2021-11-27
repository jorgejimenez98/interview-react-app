import { DataActionTypes } from "../actionTypes/data_action.types";
import {
  GET_DATA_ERROR,
  GET_DATA_ERROR_PAYLOAD,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_SUCCESS_PAYLOAD,
} from "../types/data.types";

export const get_data_request = (): GET_DATA_REQUEST => ({
  type: DataActionTypes.REQUEST,
});

export const get_data_success = (
  payload: GET_DATA_SUCCESS_PAYLOAD
): GET_DATA_SUCCESS => ({
  type: DataActionTypes.SUCCESS,
  payload,
});

export const get_data_error = (
  payload: GET_DATA_ERROR_PAYLOAD
): GET_DATA_ERROR => ({
  type: DataActionTypes.ERROR,
  payload,
});
