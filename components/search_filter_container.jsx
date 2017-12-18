import { connect } from 'react-redux';
import { changeFilter } from '../actions/filter_actions.js';

import SearchFilter from './search_filter';


const mapDispatchToProps = dispatch => {

  return {

    changeFilter: lang => dispatch(changeFilter(lang))

  };
};

export default connect(null, mapDispatchToProps)(SearchFilter);
