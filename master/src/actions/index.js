import axios from 'axios';
import axiosAuth from './axiosAuth.js';


/* --- Auth Actions --- */
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post('https://niftymarket.herokuapp.com/users/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.userId)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    })
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START })
  return axios
    .post('https://niftymarket.herokuapp.com/users/register', creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAIL, payload: err });
    });
};


/* --- Shop Actions --- */
export const GET_ITEMS_START = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';
export const getItems = () => dispatch => {
  dispatch({ type: GET_ITEMS_START });
  axios
    .get('https://niftymarket.herokuapp.com/items')
    .then(res => {
      dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ITEMS_FAIL, payload: err })
    })
}//Get all shop items

export const GET_THIS_ITEM_START = 'GET_THIS_ITEM_START';
export const GET_THIS_ITEM_SUCCESS = 'GET_THIS_ITEM_SUCCESS';
export const GET_THIS_ITEM_FAIL = 'GET_THIS_ITEM_FAIL';
export const getThisItem = (itemId) => dispatch => {
  dispatch({ type: GET_THIS_ITEM_START });
  axios
    .get(`https://niftymarket.herokuapp.com/items/item/${itemId}`, itemId)
    .then(res => {
      dispatch({ type: GET_THIS_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_THIS_ITEM_FAIL, payload: err })
    })
}//Get a single shop item


/* --- User Actions --- */
export const ADD_NEW_ITEM_START = 'ADD_NEW_ITEM_START';
export const ADD_NEW_ITEM_SUCCESS = 'ADD_NEW_ITEM_SUCCESS';
export const ADD_NEW_ITEM_FAIL = 'ADD_NEW_ITEM_FAIL';
export const addItem = (newItem, userId) => dispatch => {
  dispatch({ type: ADD_NEW_ITEM_START });
  axiosAuth()
    .post(`https://niftymarket.herokuapp.com/items/${userId}`, newItem)
    .then(res => {
      dispatch({ type: ADD_NEW_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_NEW_ITEM_FAIL, payload: err });
    })
}//Post a new item

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const getUser = (userId) => dispatch => {
  dispatch({ type: GET_USER_START });
  axiosAuth()
    .get(`https://niftymarket.herokuapp.com/users/${userId}`, userId)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, payload: err });
    })
}//Get a single user

export const GET_USER_ITEMS_START = 'GET_USER_ITEMS_START';
export const GET_USER_ITEMS_SUCCESS = 'GET_USER_ITEMS_SUCCESS';
export const GET_USER_ITEMS_FAIL = 'GET_USER_ITEMS_FAIL';
export const getUserItems = (userId) => dispatch => {
  dispatch({ type: GET_THIS_ITEM_START });
  axiosAuth()
    .get(`https://niftymarket.herokuapp.com/items/${userId}`, userId)
    .then(res => {
      dispatch({ type: GET_THIS_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_ITEMS_FAIL, payload: err });
    })
}//Get all items from a single user

export const UPDATE_USER_LIST_START = 'UPDATE_USER_LIST_START';
export const UPDATE_USER_LIST_SUCCESS = 'UPDATE_USER_LIST_SUCCESS';
export const UPDATE_USER_LIST_FAIL = 'UPDATE_USER_LIST_FAIL';
export const updateUserList = (userId, itemId) => dispatch => {
  dispatch({ type: UPDATE_USER_LIST_START });
  axiosAuth()
    .put(`https://niftymarket.herokuapp.com/items/${userId}/${itemId}`, userId, itemId)
    .then(res => {
      dispatch({ type: UPDATE_USER_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_LIST_FAIL, payload: err });
    })
}//Update selected item

export const DELETE_USER_LIST_START = 'DELETE_USER_LIST_START';
export const DELETE_USER_LIST_SUCCESS = 'DELETE_USER_LIST_SUCCESS';
export const DELETE_USER_LIST_FAIL = 'DELETE_USER_LIST_FAIL';
export const deleteUserList = (userId, itemId) => dispatch => {
  dispatch({ type: DELETE_USER_LIST_START });
  axiosAuth()
    .delete(`https://niftymarket.herokuapp.com/items/${userId}/${itemId}`, userId, itemId)
    .then(res => {
      dispatch({ type: DELETE_USER_LIST_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_LIST_FAIL, payload: err });
    })
}//Delete selected item
