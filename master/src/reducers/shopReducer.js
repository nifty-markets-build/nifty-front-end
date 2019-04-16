import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
} from '../actions';

const initialState = {
  items: [],
  isAddingItem: false,
  isGettingItems: false,
  err: null
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_START:
      return {
        ...state,
        isAddingItem: true
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isAddingItem: false
      };
    case ADD_ITEM_FAIL:
      return {
        ...state,
        isAddingItem: false,
        err: action.payload
      };
    case GET_ITEMS_START:
      return {
        ...state,
        isGettingItems: true
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        isGettingItems: false,
        items: action.payload
      };
    case GET_ITEMS_FAIL:
      return {
        ...state,
        isGettingItems: false,
        err: action.payload
      };
    default:
      return state;
  }
};
