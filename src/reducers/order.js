import {
  PUT_DRINK,
  REMOVE_DRINK,
  INCREASE_DRINK_QUANTITY,
  DECREASE_DRINK_QUANTITY,
  RESET_VALUES,
} from "../actions";

export const initialState = [];

export default function currentCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_DRINK: {
      const { drink } = action;
      return [
        ...state,
        {
          id: drink.id,
          name: drink.name,
          quantity: 1,
        },
      ];
    }
    case REMOVE_DRINK: {
      const { drinkId } = action;

      return state.reduce((accumulator, current) => {
        if (current.id === drinkId) return [...accumulator];
        return [...accumulator, current];
      }, []);
    }
    case INCREASE_DRINK_QUANTITY: {
      const { drinkId } = action;

      return state.reduce((accumulator, current) => {
        if (current.id !== drinkId) return [...accumulator, current];
        return [...accumulator, { ...current, quantity: current.quantity + 1 }];
      }, []);
    }
    case DECREASE_DRINK_QUANTITY: {
      const { drinkId } = action;

      return state.reduce((accumulator, current) => {
        if (current.id !== drinkId) return [...accumulator, current];
        return [...accumulator, { ...current, quantity: current.quantity - 1 }];
      }, []);
    }
    case RESET_VALUES: {
      return initialState;
    }
    default:
      return state;
  }
}
