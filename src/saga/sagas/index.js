import {networkSaga} from 'react-native-offline';
import {all, fork} from 'redux-saga/effects';
import {helloSaga} from './HelloSaga';
import rootSaga from './sagas';

export default function* allSagas() {
  yield all([rootSaga(), helloSaga(), fork(networkSaga)]);
}
