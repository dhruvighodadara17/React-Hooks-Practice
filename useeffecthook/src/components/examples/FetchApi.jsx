import React, { useState, useEffect } from "react";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userData) => {
        setUsers(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{textAlign:"center"}}>
      <h2>Fetch All Users Example</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)"}}>
          {users.map((user) => (
            <div style={{ textAlign:"left", backgroundColor:"lightblue", borderRadius: "10px", padding:"0.5rem 1rem" , margin:"1rem"}} key={user.id}>
              <p>{user.id}. <strong>{user.name}</strong> </p>
              
              <p><b>Email: </b>{user.email}</p>
              <p><b>Username: </b>{user.username}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchExample;
