import React, { useState, useCallback } from "react";

const SearchSuggestion = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async (searchTerm) => {
    if (searchTerm.length < 2) return;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    setSuggestions(users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  return (
    <div>
      <h2>Search Autosuggest</h2>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search users..." />
      <ul>
        {suggestions.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
