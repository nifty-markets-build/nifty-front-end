import axios from 'axios';


/* --- Auth Actions --- */
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post('https://niftymarket.herokuapp.com/users/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
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
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';
export const addItem = () => dispatch => {
dispatch({ type: ADD_ITEM_START });
axios
  .post('', {headers: {authorization: localStorage.getItem('token')}})
  .then(res => {
    dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: ADD_ITEM_FAIL, payload: err })
  })
}

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
}
