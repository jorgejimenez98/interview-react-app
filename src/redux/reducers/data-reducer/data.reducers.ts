import { DataActionTypes } from "../../actionTypes/data_action.types";
import { DataActions, InitialDataState } from "../../types/data.types";

const initialState: InitialDataState = {
  loading: false,
  persons: [],
  error: null,
};

export const dataReducer = (state = initialState, action: DataActions) => {
  switch (action.type) {
    case DataActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DataActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        persons: action.payload.persons,
        error: null,
      };
    case DataActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        persons: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
