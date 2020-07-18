import { FETCH_DRINKS_SUCCESS, RESET_VALUES } from "../../actions";

export const initialState = {};

export default function byIdReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRINKS_SUCCESS: {
      const { drinks } = action.payload;

      return drinks.reduce(
        (accumulator, { idDrink, strDrink, strDrinkThumb }) => {
          return {
            ...accumulator,
            [idDrink]: { id: idDrink, name: strDrink, img: strDrinkThumb },
          };
        },
        {}
      );
    }
    case RESET_VALUES: {
      return initialState;
    }
    default:
      return state;
  }
}
