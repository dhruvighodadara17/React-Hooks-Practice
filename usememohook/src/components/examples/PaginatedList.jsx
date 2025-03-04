import React, { useState, useMemo } from "react";

const PaginatedListBuild = ({ data, pageSize }) => {
  const [page, setPage] = useState(1);

  // Memoized paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, page, pageSize]);

  return (
    <div>
      <h2>Paginated List</h2>
      <ul>
        {paginatedData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <span> Page {page} </span>
      <button
        disabled={page * pageSize >= data.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

// Sample data
const sampleData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

const PaginatedList = () => {
  return <PaginatedListBuild data={sampleData} pageSize={5} />;
};

export default PaginatedList;
