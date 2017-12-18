import React from 'react';
import ReactPaginate from 'react-paginate';

import BookIndex from './book_index';

import { buildQuery } from '../util/api_util';


class BookSearch extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);

    this.state = { searchTerm: "", startIndex: "" };
  }


  handleChange(e){
    this.setState({ searchTerm: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ startIndex: ""});
    this.props.fetchSearchBooks(buildQuery(this.state));
  }

  handlePageClick(data) {
    let page = document.getElementById('search_container');
    console.log(page.scrollTop);

    let selected = data.selected + 1;
    let startIndex = ((selected * 10) - 10).toString();

    this.setState({ startIndex: startIndex }, () => {
      this.props.fetchSearchBooks(buildQuery(this.state));
    });


    page.scrollTo(0,0);
    console.log(page.scrollTop);
  }

  render() {
    let books = this.props.books;
    let pageCount = this.props.pageCount;
    return (
        <div id='search_container'>
          <h1 id='title'>Google Books Search</h1>
          <div id='search_input_container'>
            <input type="text"
              id='search'
              placeholder="Search books..."
              onChange={this.handleChange}/>
              <button id='submit' type="submit" onClick={this.handleSubmit}>
                <i className="material-icons">search</i>
              </button>
          </div>

          <div id='main_container'>
            <div id='filter_place_holder'/>
            <div id='results_container'>
              <BookIndex books={books} pageCount={pageCount} />

              {this.props.books.length < 1 ? null : <ReactPaginate
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={<a href="">...</a>}
                      breakClassName={"break-me"}
                      pageCount={this.props.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"} />
                }
            </div>
          </div>

        </div>
    );
  }
}

export default BookSearch;
