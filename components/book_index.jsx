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

// class BookIndex extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   componentDidUpdate(){
//     console.log('hi');
//     let page = document.getElementById('search_container');
//     page.scrollTo(0,0);
//     console.log(page.scrollTop);
//   }
//
//   render(){
//     let books = this.props.books;
//     return(
//       <ul>
//         {books.map(book => <BookIndexItem key={book.id} book={book}/>)}
//       </ul>
//     );
//   }
// }


export default BookIndex;
