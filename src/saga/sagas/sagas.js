import {delay} from './HelloSaga';
import {all, put, takeEvery, call} from 'redux-saga/effects';
import {
  addActionAsDone,
  logginIn,
  loginError,
  loginSuccess,
} from '../../redux/action/HomeScreenActions';
import {LOGIN_USER} from '../../assets/constants/redux/actions';
import {offlineActionCreators} from 'react-native-offline';
import {act} from 'react-test-renderer';

/**
 * Needs to be moved to another file
 */
function* fakeApiCall() {
  yield call(delay, 5000);
  console.log('Fake Api');
  return true;
}

function* loginUserSaga(action) {
  console.log('Login user Saga Start');
  yield put(logginIn());
  try {
    const response = yield call(fakeApiCall);
    console.log('Login response is ' + response);
    if (response) {
      yield put(loginSuccess(action.payLoad));
      yield put(addActionAsDone(action));
    } else {
      yield put(loginError());
      yield put(offlineActionCreators.fetchOfflineMode(action));
    }
  } catch (err) {
    yield put(loginError());
    yield put(offlineActionCreators.fetchOfflineMode(action));
  }
}

function* watchLoginUser() {
  console.log('Login user watcher');
  yield takeEvery(LOGIN_USER, loginUserSaga);
}

export default function* rootSaga() {
  yield all([watchLoginUser()]);
}
