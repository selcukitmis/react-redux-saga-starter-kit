import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware     = [];
  const enhancers      = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store
}
