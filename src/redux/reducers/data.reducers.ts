import { DataActionTypes } from "../actionTypes/data_action.types";
import { DataActions, InitialDataState } from "../types/data.types";

const initialState: InitialDataState = {
  loading: false,
  persons: [],
  error: null
};

export default (state = initialState, action: DataActions) => {
  switch (action.type) {
    case DataActionTypes.REQUEST:
      return {
        ...state,
        pending: true
      };
    case DataActionTypes.SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.persons,
        error: null
      };
    case DataActionTypes.ERROR:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
