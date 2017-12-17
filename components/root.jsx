import React from 'react';
import { Provider } from 'react-redux';

import BookSearchContainer from './book_search_container';

const Root = ({store}) => {
  return(
    <Provider store={store}>
        <BookSearchContainer />
    </Provider>
  );
};

export default Root;
