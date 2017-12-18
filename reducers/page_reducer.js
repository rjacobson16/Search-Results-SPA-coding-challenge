// import { RECEIVE_NEW_PAGE } from '../actions/page_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/book_actions';

const oldState = {numResults: 0, currentPage: 1};

const pageReducer = (state = oldState, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, oldState, {numResults: action.numResults});
    default:
      return state;
  }
};

export default pageReducer;
