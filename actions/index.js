//actions are plain object with infomations will send to the store
//action creator is the function return a actions
//if you want to send the action to the store, you need dispatch 
let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter: filter
});
