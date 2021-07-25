import { combineReducers } from 'redux';
import users from './users';
import demo from './demo';

const rootReducer = combineReducers({
  users,
  demo,
});

export default rootReducer;
