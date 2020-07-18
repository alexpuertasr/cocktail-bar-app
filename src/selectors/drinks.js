export const getDrinks = (state) => state.drinks;

export const getDrinksIds = (state) => getDrinks(state).allIds;

export const getDrinksById = (state) => getDrinks(state).byId;

export const makeGetDrinkById = (drinkId) => (state) =>
  getDrinksById(state)[drinkId];

export const getDrinksError = (state) => getDrinks(state).error;

export const getDrinksIsLoading = (state) => getDrinks(state).isLoading;
