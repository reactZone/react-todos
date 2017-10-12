import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(todo => todo.completed);
    case "active":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const Todo = ({ completed, text, onClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
};

const mapStateToTodoListProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
  )
});

const mapDispatchToTodoListProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
