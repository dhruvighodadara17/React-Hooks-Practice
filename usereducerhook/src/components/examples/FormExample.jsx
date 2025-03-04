import React, { useReducer } from "react";

const formReducer = (state, action) => {
  return { ...state, [action.field]: action.value };
};

const FormExample = () => {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

  return (
    <div>
      <h2>Form Handling</h2>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ field: "name", value: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ field: "email", value: e.target.value })}
      />
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

export default FormExample;
