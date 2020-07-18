export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";

// Sets the current favourit ingredient
export const setCurrentIngredient = (ingredientId) => ({
  type: SET_CURRENT_INGREDIENT,
  ingredientId,
});
