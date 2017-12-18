// import { RECEIVE_NEW_PAGE } from '../actions/page_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/book_actions';

const pageReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {pageCount: action.pageCount});
    default:
      return state;
  }
};

export default pageReducer;
