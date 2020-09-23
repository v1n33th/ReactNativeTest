import {all} from 'redux-saga/effects';
import {helloSaga} from './HelloSaga';
import rootSaga from './sagas';

export default function* allSagas() {
  yield all([rootSaga(), helloSaga()]);
}
