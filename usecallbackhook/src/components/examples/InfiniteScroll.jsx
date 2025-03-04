import React, { useState, useCallback, useEffect } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  );

  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...Array.from(
        { length: 10 },
        (_, i) => `Item ${prevItems.length + i + 1}`
      ),
    ]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreItems();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreItems]);

  return (
    <div>
      <h2>Infinite Scroll Example</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScroll;
