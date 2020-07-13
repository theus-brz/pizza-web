import api from '~/config/api';
import ENDPOINTS from '~/constants/ENDPOINTS';

const { PIZZA_DATA } = ENDPOINTS;

export default function* pizzaDataEndpoint() {
  const response = yield api.get(PIZZA_DATA);

  return response.data;
}
