import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const developmentMiddleware = [];
if (process.env.NODE_ENV === 'development') {
  developmentMiddleware.push(logger);
}

const middlewareList = [...developmentMiddleware, sagaMiddleware];

// const rootReducer = combineReducers(
//   {api: reducers.api,
//   containers: reducers.containers},
// );

function temporalReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}


const Store = (initialState = {}) => {
  const createdStore = createStore(
    temporalReducer,
    initialState,
    applyMiddleware(...middlewareList),
  );
  sagaMiddleware.run(sagas.run);
  return createdStore;
};
export default Store;
