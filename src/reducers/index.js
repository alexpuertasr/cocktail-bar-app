import { combineReducers } from "redux";

import currentIngredient from "./currentIngredient";
import drinks from "./drinks";
import ingredients from "./ingredients";
import order from "./order";

export default combineReducers({
  currentIngredient,
  drinks,
  ingredients,
  order,
});
