// imports from vendors
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

const initialDummyState = { hello: 'world' };

const dummyReducer = (state = initialDummyState) => {
  return state
};

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...[createSagaMiddleware()]),
  ...enhancers
);

const store = createStore(
  combineReducers({ dummy: dummyReducer }),
  { dummy: initialDummyState },
  composedEnhancers
);

export default store;
