import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userDataReducer from './userDataReducer';

export default combineReducers({
  user: loginReducer,
  userData: userDataReducer
});
