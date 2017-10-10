import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input;

  let enterToAddTodo = () => {
    input.value && dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
        onKeyUp={e => {
          if (e.which === 13) {
            enterToAddTodo(e);
          }
        }}
      />
      <button
        onClick={() => {
          input.value && dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default (AddTodo = connect()(AddTodo)); //only one props
