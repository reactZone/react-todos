import {v4} from 'node-uuid';

//actions are plain object with infomations will send to the store
//action creator is the function return a actions
//if you want to send the action to the store, you need dispatch 
export const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
