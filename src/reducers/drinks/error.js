import { FETCH_DRINKS_FAILURE, RESET_VALUES } from "../../actions";

export const initialState = null;

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRINKS_FAILURE: {
      const { error } = action.payload;
      return error;
    }
    case RESET_VALUES: {
      return initialState;
    }
    default:
      return state;
  }
}
