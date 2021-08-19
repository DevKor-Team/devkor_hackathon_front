import { combineReducers } from 'redux';
import users from './users';
import comments from './comments';

const rootReducer = combineReducers({
  users,
  comments,
});

export default rootReducer;
