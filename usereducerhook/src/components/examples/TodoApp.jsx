import React, { useReducer, useState } from "react";

const todoActions = {
  ADD: (state, action) => [
    ...state,
    { id: Date.now(), text: action.text, completed: false },
  ],
  TOGGLE: (state, action) =>
    state.map((todo) =>
      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    ),
  REMOVE: (state, action) => state.filter((todo) => todo.id !== action.id),
};

const todoReducer = (state, action) =>
  todoActions[action.type] ? todoActions[action.type](state, action) : state;

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD", text })}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>
              Toggle
            </button>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
