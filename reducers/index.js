import { combineReducers } from "redux";
import todos from './todos';
import visibilityFilter from './visibilityFilter';

//rooter reducer
const rooterReducer = combineReducers({
  todos, //todos: todos
  visibilityFilter //visibilityFilter: visibilityFilter
});

export default rooterReducer;
