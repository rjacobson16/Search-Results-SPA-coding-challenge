import React from 'react';

function BookIndexItem({book}){
  let volumeInfo = book.volumeInfo;
  let imageLinks = volumeInfo.imageLinks;

  return(
    <li className="book_index_item">
      {imageLinks ? <img src={imageLinks.thumbnail} className="book_cover" /> : null}
      <div className="book_info">

        <div className="book_data">
          <h2 className="book_title">{volumeInfo.title}</h2>
          <h4 className="author">Author: {volumeInfo.authors ? book.volumeInfo.authors[0] : '' }</h4>
          <h4 className="rating">Average Rating: {volumeInfo.averageRating}</h4>
        </div>
        <div className="book_description_container">
          { volumeInfo.description ? <p className="book_description">&quot;{volumeInfo.description}&quot;</p> : null }
        </div>


      </div>
    </li>
  );
}


export default BookIndexItem;
