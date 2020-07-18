export const FETCH_DRINKS_BEGIN = "FETCH_DRINKS_BEGIN";
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS";
export const FETCH_DRINKS_FAILURE = "FETCH_DRINKS_FAILURE";

export function fetchDrinks(ingredient) {
  return (dispatch) => {
    dispatch(fetchDrinksBegin());
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchDrinksSuccess(json.drinks));
        return json.drinks;
      })
      .catch((error) => dispatch(fetchDrinksFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }
  return response;
}

export const fetchDrinksBegin = () => ({
  type: FETCH_DRINKS_BEGIN,
});

export const fetchDrinksSuccess = (drinks) => ({
  type: FETCH_DRINKS_SUCCESS,
  payload: { drinks },
});

export const fetchDrinksFailure = (error) => ({
  type: FETCH_DRINKS_FAILURE,
  payload: { error },
});
