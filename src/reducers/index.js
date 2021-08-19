import { combineReducers } from 'redux';
import users from './users';
import demo from './demo';
import comments from './comments';

const rootReducer = combineReducers({
  users,
  demo,
  comments,
});

export default rootReducer;
