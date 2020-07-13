export function pizzaDataRequest() {
  return {
    type: '@pizza/DATA_REQUEST',
  };
}

export function pizzaDataSuccess(pizzaData) {
  return {
    type: '@pizza/DATA_SUCCESS',
    payload: { pizzaData },
  };
}

export function pizzaDataFailure() {
  return {
    type: '@pizza/DATA_FAILURE',
  };
}
