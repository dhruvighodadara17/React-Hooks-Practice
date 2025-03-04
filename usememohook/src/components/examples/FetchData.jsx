import React, { useState, useEffect, useMemo } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const userNames = useMemo(() => users.map((user) => user.name), [users]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
