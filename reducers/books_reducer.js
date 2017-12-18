import { RECEIVE_SEARCH_RESULTS } from '../actions/book_actions';

const booksReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.books ? action.books : [];
    default:
      return oldState;
  }
};

export default booksReducer;
