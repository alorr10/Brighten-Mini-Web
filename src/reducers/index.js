import { combineReducers } from 'redux';
import users from './users';
import authentication from './authentication';
const reducer = combineReducers({
  users,
  authentication,
});

export default reducer;
