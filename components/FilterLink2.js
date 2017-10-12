import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink2 = ({ filter, children }) => (
  <NavLink
    to={filter === "all" ? "" : filter}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink2;