import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const fetchSearchBooks = query => {
  return dispatch => {
    APIUtil.fetchSearchBooks(query)
      .then(books => dispatch(receiveSearchBooks(books)));
  };
};

export const receiveSearchBooks = books => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    books: books.items,
    pageCount: Math.ceil(books.totalItems/10)
  };
};
