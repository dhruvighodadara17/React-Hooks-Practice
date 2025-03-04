import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>useCallback Hook Examples</h1>
      <p className="def">
        <strong>
          The useCallback hook is a built-in React hook that memoizes functions,
          preventing them from being re-created on every render. It is useful
          when passing functions as props to child components, optimizing event
          handlers, and improving performance in heavy computations. useCallback
          ensures that a function remains the same unless its dependencies
          change, reducing unnecessary re-renders in components.
        </strong>
      </p>
      <p className="para">Click on any example to see its implementation:</p>
      <div className="links">
        <div>
          <p>Prevent Unnecessary Function Recreation in a Counter</p>
          <Link to="/counter">Counter</Link>
        </div>
        <div>
          <p>
            Debounce Function Calls for Improving Performance (Prevents
            unnecessary re-renders when handling input changes)
          </p>
          <Link to="/debounce-input">Debounce Input Changes</Link>
        </div>
        <div>
          <p>
            Optimized Search Filter in Lists. (Prevents unnecessary function
            recreation when filtering a list)
          </p>
          <Link to="/search-list">Search List</Link>
        </div>
        <div>
          <p>
            Prevent Unnecessary Re-renders in Child Components useCallback
            prevents the function from being re-created on each render,
            optimizing child component performance.
          </p>
          <Link to="/parent">Prevent Re-renders in child components</Link>
        </div>
        <div>
          <p>
            Prevent Function Recreation in Timer (setInterval) (Ensures the
            startTimer function does not get recreated unnecessarily)
          </p>
          <Link to="/timer">Timer Example</Link>
        </div>
        <div>
          <p>
            Avoid Function Re-Creation in a Chat Application (Ensures message
            submission function remains stable)
          </p>
          <Link to="/chat-app">Chat App</Link>
        </div>
        <div>
          <p>
            Optimized Infinite Scroll (Load More Data Efficiently) (Uses
            useCallback to prevent re-creating the function while fetching more
            data when scrolling)
          </p>
          <Link to="/infinite-scroll">Infinite Scroll Example</Link>
        </div>
        <div>
          <p>
            Avoid Unnecessary Re-renders in Drag & Drop List. (Uses useCallback
            to ensure drag events don’t re-create functions unnecessarily)
          </p>
          <Link to="/dragdrop-list">DragDrop List</Link>
        </div>
        <div>
          <p>
            Optimized API Search Suggestion (Autosuggest Input) (Uses
            useCallback to avoid unnecessary API calls while typing)
          </p>
          <Link to="/search-suggestion">Search Suggestion</Link>
        </div>
        <div>
          <p>
            Optimized Form Submission Handler (Uses useCallback to prevent
            unnecessary re-creation of the form submission function)
          </p>
          <Link to="/form-submit">Form Submit</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
