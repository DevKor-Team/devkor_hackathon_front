import { combineReducers } from 'redux';
import users from './users';
import demo from './demo';
import comments from './comments';
import tags from './tags';

const rootReducer = combineReducers({
  users,
  demo,
  comments,
  tags,
});

export default rootReducer;
