import { combineReducers } from "redux";
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const todoApp = combineReducers({
  todos, //todos: todos
  visibilityFilter //visibilityFilter: visibilityFilter
});

export default todoApp;
