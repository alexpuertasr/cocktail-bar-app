import { combineReducers } from "redux";

import allIds from "./allIds";
import byId from "./byId";
import error from "./error";
import isLoading from "./isLoading";

// Following a normalized state structure for this part
// + INFO: https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
export default combineReducers({ allIds, byId, error, isLoading });
