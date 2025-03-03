import React, { useState } from "react";

const ComplexState = () => {
  const [user, setUser] = useState({
    name: "Emily",
    age: 28,
    address: {
      city: "New York",
      zip: "10001",
    },
    hobbies: ["Reading", "Traveling"],
  });

  const updateCity = () => {
    setUser({
      ...user,
      address: { ...user.address, city: "Los Angeles" },
    });
  };

  return (
    <div>
      <h2>Complex State Example</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.address.city}</p>
      <p>Hobbies: {user.hobbies.join(", ")}</p>
      <button onClick={updateCity}>Move to LA</button>
    </div>
  );
};

export default ComplexState;
