import { connect } from 'react-redux';
import BookSearch from './book_search';
import { fetchSearchBooks } from '../actions/book_actions';

const mapStateToProps = state => ({
  books: state.books,
  pageCount: state.pagination.pageCount
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchBooks: query => dispatch(fetchSearchBooks(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);
