import React from 'react';

function BookIndexItem({book}){
  return(
    <li className="book_index_item">
      <img src={book.volumeInfo.imageLinks.thumbnail} className="book_cover" />
      <div className="book_info">
        <h3 className="book_title">{book.volumeInfo.title}</h3>
        <h4 className="rating">Average Rating: {book.volumeInfo.averageRating}</h4>

        <h4 className="author">{book.volumeInfo.authors ? book.volumeInfo.authors[0] : '' }</h4>

      </div>
    </li>
  );
}

export default BookIndexItem;
