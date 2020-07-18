export const getOrder = (state) => state.order;

export const makeGetDrinkOrdered = (drinkId) => (state) =>
  getOrder(state).find(({ id }) => id === drinkId);
