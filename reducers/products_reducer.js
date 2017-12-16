import { RECEIVE_SEARCH_RESULTS } from '../actions/product_actions';

const productsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.products;
    default:
      return oldState;
  }
};

export default productsReducer;
