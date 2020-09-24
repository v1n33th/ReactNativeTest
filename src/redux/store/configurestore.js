import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import allSagas from '../../saga/sagas';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {
  createNetworkMiddleware,
  reducer as network,
} from 'react-native-offline';
import doneTaskReducer from '../reducers/DoneTasksReducer';

const {default: userReducers} = require('../reducers/UserReducer');

const networkConfig = {
  key: 'network',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['actionQueue'],
};

const netWorkPersisted = persistReducer(networkConfig, network);

const rootReducer = combineReducers({
  user: userReducers,
  network: netWorkPersisted,
  doneTask: doneTaskReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['user', 'network', 'doneTask'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const networkMiddleware = createNetworkMiddleware({
  regexActionType: /FETCH.*REQUEST/,
  queueReleaseThrottle: 5000,
});

function configureStore() {
  const store = createStore(
    pReducer,
    applyMiddleware(networkMiddleware, logger, sagaMiddleWare),
  );
  sagaMiddleWare.run(allSagas);
  const persistor = persistStore(store);
  return {store, persistor};
}

export default configureStore;
