import React from 'react';

function BookIndexItem({book}){
  let volumeInfo = book.volumeInfo;
  let imageLinks = volumeInfo.imageLinks;

  return(
    <li className="book_index_item">
      {imageLinks ? <img src={imageLinks.thumbnail} className="book_cover" /> : null}
      <div className="book_info">
        <h3 className="book_title">{volumeInfo.title}</h3>
        <h4 className="rating">Average Rating: {volumeInfo.averageRating}</h4>

        <h4 className="author">{volumeInfo.authors ? book.volumeInfo.authors[0] : '' }</h4>

      </div>
    </li>
  );
}


export default BookIndexItem;
