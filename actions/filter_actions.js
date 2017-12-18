export const RECEIVE_FILTER = 'RECEIVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const receiveFilter = (filter) => ({
  type: RECEIVE_FILTER,
  lang: filter
});

export const changeFilter = filter => dispatch => {
  dispatch(receiveFilter(filter));
};
