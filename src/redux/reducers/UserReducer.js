import {combineReducers} from '@reduxjs/toolkit';
import LoginState from '../../models/LoginState';

const {
  GET_USERS,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGGING_IN,
} = require('../../assets/constants/redux/actions');
const {getInitialUsers} = require('../../services/LoginScreenServices');

function userReducer(state = getInitialUsers(), action) {
  if (action.type === GET_USERS) {
    return state;
  }
  return state;
}

function loginReducer(state = new LoginState(), action) {
  if (action.type === LOGIN_USER) {
    console.log('LOGIN_USER REDUCER Entered');
    return state;
  } else if (action.type === LOGIN_SUCCESS) {
    const nextState = {...state};
    nextState.isSuccess = true;
    nextState.isLoading = false;
    nextState.userName = action.payLoad.userName;
    return nextState;
  } else if (action.type === LOGIN_ERROR) {
    console.log('Login Error Reducer');
    const nextState = {...state};
    nextState.isSuccess = false;
    nextState.isLoading = false;
    nextState.userName = action.payLoad.userName;
    return nextState;
  } else if (action.type === LOGGING_IN) {
    const nextState = {...state};
    nextState.isLoading = true;
    return nextState;
  }
  return state;
}

const userReducers = combineReducers({
  users: userReducer,
  loginState: loginReducer,
});

export default userReducers;
