import React, { useState, useCallback } from "react";

const SearchList = () => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grapes"];

  const filteredItems = useCallback(
    () => items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <ul>{filteredItems().map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
};

export default SearchList;
