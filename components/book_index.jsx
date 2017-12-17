import React from 'react';

import BookIndexItem from './book_index_item';

function BookIndex({books}){
  return(
      <ul>
        {books.map(book => <BookIndexItem key={book.id} book={book}/>)}
      </ul>
  );

}

export default BookIndex;
