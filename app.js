import ReactDOM from "react-dom";
import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { PropTypes } from "prop-types";
import { Provider, connect } from "react-redux";

import rooterReducer from "./reducers";
import TodoApp from "./components/TodoApp";
import { loadState, saveState } from "./localStore";
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore(rooterReducer, persistedState);
console.log(store.getState());

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos //just save the data without any UI state
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
