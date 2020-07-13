import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import ERROR_MESSAGES from '~/constants/ERROR_MESSAGES';
import finishOrderEndpoint from '~/services/endpoints/finishOrderEndpoint';
import orderDataEndpoint from '~/services/endpoints/orderDataEndpoint';

import {
  finishOrderSuccess,
  finishOrderFailure,
  orderDataSuccess,
  orderDataFailure,
} from './actions';

const {
  GET_ORDER_DATA_ERROR_MESSAGE,
  FINISH_ORDER_ERROR_MESSAGE,
} = ERROR_MESSAGES;

export function* getOrderData() {
  try {
    const response = yield call(orderDataEndpoint);
    yield put(orderDataSuccess(response));
  } catch (err) {
    toast.error(GET_ORDER_DATA_ERROR_MESSAGE);
    yield put(orderDataFailure());
  }
}

export function* finishOrder(action) {
  try {
    const {
      payload: { orderPayload },
    } = action;
    const response = yield call(finishOrderEndpoint, { ...orderPayload });
    yield put(finishOrderSuccess(response));
    toast.success(response);
  } catch (err) {
    toast.error(FINISH_ORDER_ERROR_MESSAGE);
    yield put(finishOrderFailure());
  }
}

export default all([
  takeLatest('@order/DATA_REQUEST', getOrderData),
  takeLatest('@order/FINISH_REQUEST', finishOrder),
]);
