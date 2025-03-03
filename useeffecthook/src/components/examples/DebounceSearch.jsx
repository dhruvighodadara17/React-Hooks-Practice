import React, { useState, useEffect } from "react";

const DebounceSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms delay

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      console.log("Fetching results for:", debouncedTerm);
    }
  }, [debouncedTerm]);

  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Searching for: {debouncedTerm}</p>
    </div>
  );
};

export default DebounceSearch;
