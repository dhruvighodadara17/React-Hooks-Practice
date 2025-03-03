import React, { useState, useEffect } from "react";

const FetchExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((userData) => {
        setData(userData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fetch API Example</h2>
      {loading ? <p>Loading...</p> : <p>Name: {data.name}</p>}
    </div>
  );
};

export default FetchExample;
