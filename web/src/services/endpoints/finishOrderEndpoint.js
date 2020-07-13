import api from '~/config/api';
import ENDPOINTS from '~/constants/ENDPOINTS';

const { FINISH_ORDER } = ENDPOINTS;

export default function* finishOrderEndpoint(body) {
  const response = yield api.post(FINISH_ORDER, body);

  return response.data;
}
