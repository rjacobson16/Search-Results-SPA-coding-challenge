import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import pageReducer from './page_reducer';
import filterReducer from './filter_reducer';

export default combineReducers({
  books: booksReducer,
  pagination: pageReducer,
  filter: filterReducer
});
