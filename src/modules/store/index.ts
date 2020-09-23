import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import formReducer from 'redux-form/lib/reducer';

import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import { createPromise } from 'redux-promise-middleware';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { createBrowserHistory } from 'history';

import storage from 'redux-persist/lib/storage';
import { migrations } from './migrations';
import * as reducers from './reducers';
import { blacklistTransform } from './utils';

const persistConfig = {
  key: 'app',
  version: 8,
  blacklist: ['form', 'appErrors', 'transactions', 'router'],
  migrate: createMigrate(migrations),
  storage,
  transforms: [blacklistTransform],
};

export const history = createBrowserHistory();

const reducer = combineReducers({
  ...reducers,
  form: formReducer,
  router: connectRouter(history),
});

const routingMiddleware = routerMiddleware(history);
const persistedReducer = persistReducer(persistConfig, reducer);

const initialState = {};

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(routingMiddleware, thunk, createPromise({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] })),
  ),
);

export const persistor = persistStore(store);
