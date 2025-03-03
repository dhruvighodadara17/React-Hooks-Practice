import React, { useState } from "react";

const MultiState = () => {
  const [name, setName] = useState("Alice");
  const [age, setAge] = useState(30);
  const [email, setEmail] = useState("alice@example.com");

  return (
    <div>
      <h2>Multiple useState Hooks Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button onClick={() => setName("Bob")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setEmail("bob@example.com")}>Change Email</button>
    </div>
  );
};

export default MultiState;
