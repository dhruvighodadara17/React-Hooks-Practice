import React, { useState } from "react";

const ObjectState = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    email: "john@example.com",
  });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <h2>Object State Example</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
};

export default ObjectState;
