import { combineReducers } from 'redux';
import users from './users';
import demo from './demo';
import comments from './comments';
import emojis from './emojis';
import tags from './tags';

const rootReducer = combineReducers({
  users,
  demo,
  comments,
  tags,
  emojis,
});

export default rootReducer;
