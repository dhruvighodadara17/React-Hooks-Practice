import React, { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: Math.max(1, state.step - 1) };
    case "UPDATE_FIELD":
      return { ...state, formData: { ...state.formData, [action.field]: action.value } };
    case "RESET":
      return { step: 1, formData: { name: "", email: "", password: "" } };
    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    step: 1,
    formData: { name: "", email: "", password: "" },
  });

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>

      {state.step === 1 && (
        <div>
          <h2>Step 1: Enter Name</h2>
          <input
            type="text"
            name="name"
            value={state.formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h2>Step 2: Enter Email</h2>
          <input
            type="email"
            name="email"
            value={state.formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h2>Step 3: Enter Password</h2>
          <input
            type="password"
            name="password"
            value={state.formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
      )}

      {state.step === 4 && (
        <div>
          <h2>Summary</h2>
          <p><strong>Name:</strong> {state.formData.name}</p>
          <p><strong>Email:</strong> {state.formData.email}</p>
          <p><strong>Password:</strong> {state.formData.password.replace(/./g, "*")}</p>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
      )}

      <div>
        {state.step > 1 && state.step < 4 && (
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Previous</button>
        )}
        {state.step < 4 && (
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
