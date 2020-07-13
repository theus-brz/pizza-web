import { all } from 'redux-saga/effects';

import order from './order/sagas';
import pizza from './pizza/sagas';

export default function* rootSaga() {
  return yield all([order, pizza]);
}
