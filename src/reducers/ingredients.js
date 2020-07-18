import {
  FETCH_INGREDIENTS_BEGIN,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
} from "../actions";

export const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function currentCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INGREDIENTS_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_INGREDIENTS_SUCCESS: {
      const { ingredients } = action.payload;

      const items = ingredients.reduce((accumulator, { strIngredient1 }) => {
        return [
          ...accumulator,
          { label: strIngredient1, value: strIngredient1 },
        ];
      }, []);

      return {
        ...state,
        loading: false,
        items,
      };
    }
    case FETCH_INGREDIENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
}
