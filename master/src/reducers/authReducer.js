import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from '../actions';

const initialState = {
    isLoggingIn: false,
    isSigningUp: false,
    err: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        err: action.payload
      };
      case SIGNUP_START:
        return {
          ...state,
          isSigningUp: true
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isSigningUp: false
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          isSigningUp: false,
          err: action.payload
        };
    default:
      return state;
  }
};
