import React, { useReducer, useEffect } from "react";

const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, data: action.data, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const ApiComponent = () => {
  const [state, dispatch] = useReducer(apiReducer, {
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        dispatch({ type: "FETCH_SUCCESS", data: result });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", error: "Failed to fetch data" });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data Fetching</h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.data && (
        <ul>
          {state.data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiComponent;
