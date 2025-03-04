import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>useMemo Hook Examples</h1>
      <p className="def">
        <strong>
          useMemo is a React hook that memoizes a computed value, preventing
          unnecessary recalculations on every render. It is mainly used to
          optimize expensive computations, filter or sort large datasets, and
          prevent unnecessary object re-creations that could cause unnecessary
          re-renders. The hook runs the computation only when its dependencies
          change, improving performance by avoiding redundant operations. It
          should be used wisely, as excessive use can increase complexity
          without significant benefits.
        </strong>
      </p>
      <p className="para">Click on any example to see its implementation:</p>
      <div className="links">
        <div>
          <p>Optimizing Expensive Computations (Factorial Calculation)</p>
          <Link to="/memoized-factorial">Memoizes Factorial Example</Link>
        </div>
        <div>
          <p>Avoid filtering a large dataset on every render.</p>
          <Link to="/userlist">UserList Example</Link>
        </div>
        <div>
          <p>Sorting a large dataset can be expensive.</p>
          <Link to="/sorted-numbers">Sorted Numbers Example</Link>
        </div>
        <div>
          <p>Calculating the total price of items in a cart.</p>
          <Link to="/shopping-cart">Shopping Cart Total Price counting</Link>
        </div>
        <div>
          <p>Recomputing theme styles on every render is inefficient.</p>
          <Link to="/theme-switcher">Theme Switcher</Link>
        </div>
        <div>
          <p>Avoiding unnecessary processing of fetched data.</p>
          <Link to="/fetch-data">Fetch Data</Link>
        </div>
        <div>
          <p>
            Prevent unnecessary recalculations when filtering completed tasks.
          </p>
          <Link to="/completed-tasks">Completed tasks counting</Link>
        </div>
        <div>
          <p> Avoid re-slicing the paginated data unnecessarily.</p>
          <Link to="/paginated-list">Paginated List</Link>
        </div>
        <div>
          <p>Compute a value only if a condition is met.</p>
          <Link to="/heavy-calculation">Heavy Calculation</Link>
        </div>
        <div>
          <p>
            {" "}
            Calculating Fibonacci numbers recursively can be very expensive.
          </p>
          <Link to="/fibonacci-series">Fibonacci Series</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
