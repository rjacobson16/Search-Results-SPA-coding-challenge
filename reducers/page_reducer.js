// import { RECEIVE_NEW_PAGE } from '../actions/page_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/book_actions';

const oldState = {currentPage: 1};

const pageReducer = (state = oldState, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, oldState, {pageCount: action.pageCount});
    default:
      return state;
  }
};

export default pageReducer;
