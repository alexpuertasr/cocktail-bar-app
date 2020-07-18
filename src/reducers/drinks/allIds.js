import { FETCH_DRINKS_SUCCESS, RESET_VALUES } from "../../actions";

export const initialState = [];

export default function allIdsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRINKS_SUCCESS: {
      const { drinks } = action.payload;

      return drinks.reduce((accumulator, { idDrink }) => {
        return [...accumulator, idDrink];
      }, []);
    }
    case RESET_VALUES: {
      return initialState;
    }
    default:
      return state;
  }
}
