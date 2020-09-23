import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import allSagas from '../../saga/sagas';

const {default: userReducers} = require('../reducers/UserReducer');

const rootReducer = combineReducers({user: userReducers});

const sagaMiddleWare = createSagaMiddleware();

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
  sagaMiddleWare.run(allSagas);
  return store;
}

export default configureStore;
