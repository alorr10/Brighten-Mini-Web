import {} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  id: '',
  name: '',
  email: '',
  instagram: '',
  receivedBrightens: [],
  searchUsers: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      if (action.payload) {
        return {
          ...state,
          ...action.payload.users,
          // ...INITIAL_STATE,
        };
      }
      return {
        ...state,
      };
    case 'USER_DETAILS_FULFILLED':
      return {
        id: action.payload.id,
        name: action.payload.name,
        instagram: action.payload.instagram,
      };

    case 'SEARCH_FULFILLED':
      return {
        ...state,
        searchUsers: action.payload,
      };

    case 'CLEAR_SEARCH_USERS':
      return {
        ...state,
        searchUsers: [],
      };

    case 'LOGOUT':
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default users;
