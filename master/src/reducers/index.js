import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { shopReducer } from './shopReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  authReducer,
  shopReducer,
  userReducer,
});
