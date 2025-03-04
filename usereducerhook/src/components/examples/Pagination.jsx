import React, { useReducer } from "react";

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "PREV_PAGE":
      return { ...state, currentPage: Math.max(1, state.currentPage - 1) };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const Pagination = () => {
  const [state, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalPages: 5,
  });

  return (
    <div>
      <h2>Pagination Example</h2>
      <p>Current Page: {state.currentPage}</p>

      <button
        onClick={() => dispatch({ type: "PREV_PAGE" })}
        disabled={state.currentPage === 1}>
        Previous
      </button>

      {[...Array(state.totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => dispatch({ type: "SET_PAGE", payload: index + 1 })}
          style={{
            fontWeight: state.currentPage === index + 1 ? "bold" : "normal",
          }}>
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => dispatch({ type: "NEXT_PAGE" })}
        disabled={state.currentPage === state.totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
