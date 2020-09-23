import {delay} from './HelloSaga';
import {all, put, takeEvery, call, take} from 'redux-saga/effects';
import {
  logginIn,
  loginError,
  loginSuccess,
} from '../../redux/action/HomeScreenActions';
import {LOGIN_USER} from '../../assets/constants/redux/actions';

/**
 * Needs to be moved to another file
 */
function* fakeApiCall() {
  yield call(delay, 5000);
  console.log('Fake Api');
  return false;
}

function* loginUserSaga(loginState) {
  console.log('Login user Saga Start');
  yield put(logginIn());
  try {
    const response = yield call(fakeApiCall);
    console.log('Login response is ' + response);
    if (response) {
      yield put(loginSuccess(loginState));
    } else {
      yield put(loginError());
    }
  } catch (err) {
    yield put(loginError());
  }
}

function* watchLoginUser() {
  console.log('Login user watcher');
  yield takeEvery(LOGIN_USER, loginUserSaga);
}

export default function* rootSaga() {
  yield all([watchLoginUser()]);
}
