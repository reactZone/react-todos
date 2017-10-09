import ReactDOM from "react-dom";
import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { PropTypes } from "prop-types";
import { Provider, connect } from "react-redux";

import todoApp from "./reducers";
import TodoApp  from "./components/TodoApp";

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
