import React from 'react';
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

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
    <FilterLink filter="SHOW_COMPLETED">Complete</FilterLink>
  </p>
);

export default Footer;
