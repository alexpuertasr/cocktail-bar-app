export const PUT_DRINK = "PUT_DRINK";
export const REMOVE_DRINK = "REMOVE_DRINK";
export const INCREASE_DRINK_QUANTITY = "INCREASE_DRINK_QUANTITY";
export const DECREASE_DRINK_QUANTITY = "DECREASE_DRINK_QUANTITY";

export const putDrink = (drink) => ({
  type: PUT_DRINK,
  drink,
});

export const removeDrink = (drinkId) => ({
  type: REMOVE_DRINK,
  drinkId,
});

export const increaseDrinkQuantity = (drinkId) => ({
  type: INCREASE_DRINK_QUANTITY,
  drinkId,
});

export const decreaseDrinkQuantity = (drinkId) => ({
  type: DECREASE_DRINK_QUANTITY,
  drinkId,
});
