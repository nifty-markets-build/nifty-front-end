import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_ITEMS_START,
  GET_USER_ITEMS_SUCCESS,
  GET_USER_ITEMS_FAIL,
  UPDATE_USER_LIST_START,
  UPDATE_USER_LIST_SUCCESS,
  UPDATE_USER_LIST_FAIL,
  DELETE_USER_LIST_START,
  DELETE_USER_LIST_SUCCESS,
  DELETE_USER_LIST_FAIL,
  ADD_NEW_ITEM_START,
  ADD_NEW_ITEM_SUCCESS,
  ADD_NEW_ITEM_FAIL,
} from '../actions';

const initialState = {
  user: {},
  userItems: [],
  isGettingUser: false,
  isGettingUserItems: false,
  isUpdatingUserItem: false,
  isDeletingUserItem: false,
  isAddingItem: false,
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
    case GET_USER_ITEMS_START:
      return {
        ...state,
        isGettingUserItems: true
      };
    case GET_USER_ITEMS_SUCCESS:
      return {
        ...state,
        isGettingUserItems: false,
        userItems: action.payload
      };
    case GET_USER_ITEMS_FAIL:
      return {
        ...state,
        isGettingUserItems: false,
        err: action.payload
      };
    case UPDATE_USER_LIST_START:
      return {
        ...state,
        isUpdatingUserItem: true
      };
    case UPDATE_USER_LIST_SUCCESS:
      return {
        ...state,
        isUpdatingUserItem: false
      };
    case UPDATE_USER_LIST_FAIL:
      return {
        ...state,
        isUpdatingUserItem: false,
        err: action.payload
      };
    case DELETE_USER_LIST_START:
      return {
        ...state,
        isDeletingUserItem: true
      };
    case DELETE_USER_LIST_SUCCESS:
      return {
        ...state,
        isDeletingUserItem: false
      };
    case DELETE_USER_LIST_FAIL:
      return {
        ...state,
        isDeletingUserItem: false,
        err: action.payload
      };
    case ADD_NEW_ITEM_START:
      return {
        ...state,
        isAddingItem: true
      };
    case ADD_NEW_ITEM_SUCCESS:
      return {
        ...state,
        isAddingItem: false
      };
    case ADD_NEW_ITEM_FAIL:
      return {
        ...state,
        isAddingItem: false,
        err: action.payload
      };
    default:
      return state;
  }
};
