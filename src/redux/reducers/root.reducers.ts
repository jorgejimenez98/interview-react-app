import { combineReducers } from "redux";
import dataReducer from "./data-reducer/data.reducers";

const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
