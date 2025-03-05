import React, { useState, useCallback } from "react";

const SearchAPI = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch User Details by ID
  const fetchUserById = useCallback(async () => {
    if (!userId) {
      setError("Please enter a User ID");
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return (
    <div>
      <h2>Search User by ID</h2>
      <input
        type="number"
        placeholder="Enter User ID (1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchUserById}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}>
          <h3>User Details</h3>
          <p>
            <strong>ID:</strong> {userData.id}
          </p>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p>
            <strong>Website:</strong> {userData.website}
          </p>
          <p>
            <strong>Company:</strong> {userData.company.name}
          </p>
          <p>
            <strong>Address:</strong> {userData.address.street},{" "}
            {userData.address.city}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchAPI;
