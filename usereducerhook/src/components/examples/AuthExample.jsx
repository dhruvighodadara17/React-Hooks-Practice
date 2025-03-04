import React, { useReducer } from "react";

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.user };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const AuthExample = () => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  const loginUser = () => {
    const user = { name: "John Doe", email: "john@example.com" };
    dispatch({ type: "LOGIN", user });
  };

  return (
    <div>
      <h1>Authentication Example</h1>
      {state.isAuthenticated ? (
        <>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </>
      ) : (
        <button onClick={loginUser}>Login</button>
      )}
    </div>
  );
};

export default AuthExample;
