import { combineReducers } from 'redux';
import users from './users';
import comments from './comments';
import tags from './tags';

const rootReducer = combineReducers({
  users,
  comments,
  tags,
});

export default rootReducer;
