import React, { useReducer } from "react";

const undoRedoActions = {
  UPDATE: (state, action) => ({
    history: [...state.history, state.current],
    current: action.newState,
    future: [],
  }),

  UNDO: (state) => ({
    history:
      state.history.length > 0 ? state.history.slice(0, -1) : state.history,
    current:
      state.history.length > 0
        ? state.history[state.history.length - 1]
        : state.current,
    future:
      state.history.length > 0
        ? [state.current, ...state.future]
        : state.future,
  }),

  REDO: (state) => ({
    history:
      state.future.length > 0
        ? [...state.history, state.current]
        : state.history,
    current: state.future.length > 0 ? state.future[0] : state.current,
    future: state.future.length > 0 ? state.future.slice(1) : state.future,
  }),

  RESET: () => ({ current: "", history: [], future: [] }),
};

const undoReducer = (state, action) =>
  (undoRedoActions[action.type] &&
    undoRedoActions[action.type](state, action)) ||
  state;

const UndoRedoExample = () => {
  const [state, dispatch] = useReducer(undoReducer, {
    current: "",
    history: [],
    future: [],
  });

  return (
    <div>
      <h2>Undo/Redo Example</h2>
      <input
        type="text"
        value={state.current}
        onChange={(e) => dispatch({ type: "UPDATE", newState: e.target.value })}
      />
      <p>Current Value: {state.current}</p>

      <button
        onClick={() => dispatch({ type: "UNDO" })}
        disabled={state.history.length === 0}>
        Undo
      </button>

      <button
        onClick={() => dispatch({ type: "REDO" })}
        disabled={state.future.length === 0}>
        Redo
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default UndoRedoExample;
