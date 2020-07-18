import { SET_CURRENT_INGREDIENT, RESET_VALUES } from "../actions";

export const initialState = null;

export default function currentCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      const { ingredientId } = action;
      return ingredientId;
    }
    case RESET_VALUES: {
      return initialState;
    }
    default:
      return state;
  }
}
