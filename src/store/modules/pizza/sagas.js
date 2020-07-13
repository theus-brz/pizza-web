import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import ERROR_MESSAGES from '~/constants/ERROR_MESSAGES';
import pizzaDataEndpoint from '~/services/endpoints/pizzaDataEndpoint';

import { pizzaDataSuccess, pizzaDataFailure } from './actions';

const { GET_PIZZA_DATA_ERROR_MESSAGE } = ERROR_MESSAGES;

export function* getPizzaData() {
  try {
    const response = yield call(pizzaDataEndpoint);
    yield put(pizzaDataSuccess(response));
  } catch (err) {
    toast.error(GET_PIZZA_DATA_ERROR_MESSAGE);
    yield put(pizzaDataFailure());
  }
}

export default all([takeLatest('@pizza/DATA_REQUEST', getPizzaData)]);
