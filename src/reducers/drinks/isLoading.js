import {
  FETCH_DRINKS_BEGIN,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_FAILURE,
  RESET_VALUES,
} from "../../actions";

export const initialState = false;

export default function isLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRINKS_BEGIN: {
      return true;
    }
    case FETCH_DRINKS_SUCCESS: {
      return false;
    }
    case FETCH_DRINKS_FAILURE: {
      return false;
    }
    case RESET_VALUES: {
      return initialState;
    }
    default:
      return state;
  }
}
