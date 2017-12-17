import React from 'react';
import BookIndex from './book_index';

class BookSearch extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { searchTerm: "" };
  }

  handleChange(e){
    this.setState({ searchTerm: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchBooks(searchTerm);
  }

  render() {
    let books = this.props.books;

    return (
        <div id='search_container'>
          <h1 id='title'>Google Book Search</h1>
          <div id='search_input_container'>
            <input type="text"
              id='search'
              placeholder="Search books..."
              onChange={this.handleChange}/>
              <button id='submit' type="submit" onClick={this.handleSubmit}>
                <i className="material-icons">search</i>
              </button>
          </div>

          <div id='results_container'>
            <div id='filter_place_holder'/>
            <BookIndex books={books} />
          </div>

        </div>
    );
  }
}

export default BookSearch;
