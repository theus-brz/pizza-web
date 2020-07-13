import produce from 'immer';

const INITIAL_STATE = {
  loading: true,
  error: false,
  data: {},
  message: '',
};

export default function orderReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/DATA_SUCCESS': {
        draft.data = action.payload.orderData;
        draft.loading = false;
        break;
      }
      case '@order/DATA_FAILURE': {
        draft.error = true;
        draft.loading = false;
        break;
      }
      case '@order/FINISH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/FINISH_SUCCESS': {
        draft.message = action.payload.successMessage;
        draft.loading = false;
        break;
      }
      case '@order/FINISH_FAILURE': {
        draft.error = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
