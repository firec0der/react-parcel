// imports from vendors
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = compose(
  applyMiddleware(...[sagaMiddleware]),
  ...enhancers
);

const store = createStore(
  rootReducer,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
