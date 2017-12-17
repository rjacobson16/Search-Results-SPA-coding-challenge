import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => {
  return createStore(RootReducer, applyMiddleware(thunk, logger));
};

export default configureStore;
