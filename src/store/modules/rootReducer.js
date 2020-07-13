import { combineReducers } from 'redux';

import order from './order/reducer';
import pizza from './pizza/reducer';

export default combineReducers({ order, pizza });
