import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from '../actions';

const initialState = {
  user: {},
  isGettingUser: false,
  err: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        isGettingUser: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        user: action.payload
      };
    case GET_USER_FAIL:
      return {
        ...state,
        isGettingUser: false,
        err: action.payload
      };

    default:
      return state;
  }
};
