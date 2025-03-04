import React, { useReducer } from "react";

const undoRedoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        history: [...state.history, state.current], // Save previous state in history
        current: action.newState,
        future: [], // Clear future when new update happens
      };

    case "UNDO":
      if (state.history.length === 0) return state; // Prevent undo if no history
      return {
        history: state.history.slice(0, -1), // Remove last state from history
        current: state.history[state.history.length - 1], // Set current to last history
        future: [state.current, ...state.future], // Move current to future for redo
      };

    case "REDO":
      if (state.future.length === 0) return state; // Prevent redo if no future state
      return {
        history: [...state.history, state.current], // Save current to history
        current: state.future[0], // Move first future state to current
        future: state.future.slice(1), // Remove first future state
      };

    case "RESET":
      return { current: "", history: [], future: [] };

    default:
      return state;
  }
};

const UndoRedoExample = () => {
  const [state, dispatch] = useReducer(undoRedoReducer, {
    current: "",
    history: [],
    future: [],
  });

  return (
    <div>
      <h1>Undo/Redo Example</h1>
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
