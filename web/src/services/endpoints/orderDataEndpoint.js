import api from '~/config/api';
import ENDPOINTS from '~/constants/ENDPOINTS';

const { ODER_DATA } = ENDPOINTS;

export default function* orderDataEndpoint() {
  const response = yield api.get(ODER_DATA);

  return response.data;
}
