import { combineReducers } from 'redux';
import booksReducer from './books_reducer';

export default combineReducers({
  books: booksReducer
});
