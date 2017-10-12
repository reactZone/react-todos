import React from 'react';
import FilterLink from './FilterLink';
import FilterLink2 from './FilterLink2';

const Footer = () => (
  <p>
    Show: <FilterLink2 filter="all">All</FilterLink2>{" "}
    <FilterLink2 filter="active">Active</FilterLink2>{" "}
    <FilterLink2 filter="completed">Complete</FilterLink2>
  </p>
);

export default Footer;
