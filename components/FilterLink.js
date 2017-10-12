import { Link } from "./Link";
import { setVisibilityFilter} from '../actions';
import {connect} from 'react-redux';

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
};

const FilterLink = connect(mapStateToLinkProps, mapDispatchLinkProps)(Link);
export default FilterLink;