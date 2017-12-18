import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import pageReducer from './page_reducer';

export default combineReducers({
  books: booksReducer,
  pagination: pageReducer
});
