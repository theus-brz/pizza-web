import produce from 'immer';

const INITIAL_STATE = {
  loading: true,
  error: false,
  data: {},
};

export default function pizzaReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pizza/DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pizza/DATA_SUCCESS': {
        draft.data = action.payload.pizzaData;
        draft.loading = false;
        break;
      }
      case '@pizza/DATA_FAILURE': {
        draft.error = true;
        break;
      }
      default:
    }
  });
}
