import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show: <FilterLink filter="all">All</FilterLink>{" "}
    <FilterLink filter="active">Active</FilterLink>{" "}
    <FilterLink filter="completed">Complete</FilterLink>
  </p>
);

export default Footer;
