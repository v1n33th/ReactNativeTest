import {
  GET_USERS,
  LOGGING_IN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
} from '../../assets/constants/redux/actions';

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export function loginUser(loginState) {
  return {
    type: LOGIN_USER,
    payLoad: loginState,
  };
}

export function loginSuccess(loginState) {
  return {
    type: LOGIN_SUCCESS,
    payLoad: loginState,
  };
}

export function loginError(errorMessage = 'Error Occured') {
  return {
    type: LOGIN_ERROR,
    payLoad: errorMessage,
  };
}

export function logginIn() {
  return {
    type: LOGGING_IN,
  };
}
