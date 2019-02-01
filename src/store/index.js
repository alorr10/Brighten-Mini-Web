import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['nav'],
};

// if (__DEV__) {
//   // store = createStore(reducers, {}, applyMiddleware(thunk));
//   const pReducer = persistReducer(persistConfig, rootReducer);
//   store = createStore(pReducer, {}, applyMiddleware(thunk, logger));
//   const persistor = persistStore(store);
// } else {
//   const pReducer = persistReducer(persistConfig, rootReducer);
//   store = createStore(pReducer, {}, applyMiddleware(thunk));
//   const persistor = persistStore(store);
// }

const pReducer = persistReducer(persistConfig, rootReducer);
let store = {};
let persistor = {};

if (process.env.NODE_ENV !== 'production') {
  store = createStore(pReducer, {}, applyMiddleware(thunk, logger));
} else {
  store = createStore(pReducer, {}, applyMiddleware(thunk));
}

persistor = persistStore(store);

export { store, persistor };
