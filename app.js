import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import  {TodoApp, todoApp}  from "./components/Todo";

ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById("root")
);
