import React from 'react';

import BookIndexItem from './book_index_item';

function BookIndex({books, pageCount}){

  if(pageCount == 0) {
    return <h2 id='no_result'>Sorry, no results</h2>;
  }

  return(
      <ul>
        {books.map(book => <BookIndexItem key={book.id} book={book}/>)}
      </ul>
  );

}

export default BookIndex;
