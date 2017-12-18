import { RECEIVE_FILTER, CLEAR_FILTER } from '../actions/filter_actions';

const filterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_FILTER:
      return Object.assign({}, state, {lang: action.lang});
    // case CLEAR_FILTER:
    //   return Object.assign({}, state, {lang: ""});
    default:
      return state;
  }
};

export default filterReducer;
