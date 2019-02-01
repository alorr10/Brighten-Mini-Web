import {} from '../actions/types';

const INITIAL_STATE = {
  authStep: 1,
  loading: false,
  error: null,
  confirmResult: null,
};

const authentication = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      if (action.payload) {
        return {
          ...state,
          ...action.payload.authentication,
          loading: false,
          error: null,
          // ...INITIAL_STATE,
        };
      }
      return {
        ...state,
      };
    case 'LOGOUT':
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default authentication;
