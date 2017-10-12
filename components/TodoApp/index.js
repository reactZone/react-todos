import React from "react";
import AddTodo from "../AddTodo";
import VisibleTodoList from "../VisibleTodoList";
import Footer from "../Footer";

const App = ({match}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter='all'/>
    <Footer />
  </div>
);

export default App;
