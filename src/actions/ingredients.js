export const FETCH_INGREDIENTS_BEGIN = "FETCH_INGREDIENTS_BEGIN";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";

export function fetchIngredients() {
  return (dispatch) => {
    dispatch(fetchIngredientsBegin());
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchIngredientsSuccess(json.drinks));
        return json.drinks;
      })
      .catch((error) => dispatch(fetchIngredientsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }
  return response;
}

export const fetchIngredientsBegin = () => ({
  type: FETCH_INGREDIENTS_BEGIN,
});

export const fetchIngredientsSuccess = (ingredients) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: { ingredients },
});

export const fetchIngredientsFailure = (error) => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: { error },
});
