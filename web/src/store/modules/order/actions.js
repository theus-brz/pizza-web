export function orderDataRequest() {
  return {
    type: '@order/DATA_REQUEST',
  };
}

export function orderDataSuccess(orderData) {
  return {
    type: '@order/DATA_SUCCESS',
    payload: { orderData },
  };
}

export function orderDataFailure() {
  return {
    type: '@order/DATA_FAILURE',
  };
}

export function finishOrderRequest(orderPayload) {
  return {
    type: '@order/FINISH_REQUEST',
    payload: { orderPayload },
  };
}

export function finishOrderSuccess(successMessage) {
  return {
    type: '@order/FINISH_SUCCESS',
    payload: { successMessage },
  };
}

export function finishOrderFailure() {
  return {
    type: '@order/FINISH_FAILURE',
  };
}
