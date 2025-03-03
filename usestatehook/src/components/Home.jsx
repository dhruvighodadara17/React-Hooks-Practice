import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>useState Hook Examples</h1>
      <p className="def">
        <strong>
          The useState hook is used in real projects to manage component-level
          state in functional components. It helps with tasks like handling form
          inputs, toggling UI elements (like modals or dark mode), managing
          counters, and storing fetched API data. It allows components to
          re-render dynamically when state changes, making React applications
          interactive and responsive.
        </strong>
      </p>
      <p className="para">Click on any example to see its implementation:</p>
      <ol>
        <li>
          <p>Counter Increase / Decrease / Reset</p>
          <Link to="/counter">Counter Example</Link>
        </li>
        <li>
          <p>Toggle Theme (Dark / Light)</p>
          <Link to="/toggle-theme">Toggle Theme Example</Link>
        </li>
        <li>
          <p>Set text input value</p>
          <Link to="/form-input">Form Input Example</Link>
        </li>
        <li>
          <p>Update array</p>
          <Link to="/array-manipulation">Array Manipulation</Link>
        </li>
        <li>
          <p>Set Object</p>
          <Link to="/object-state">Object State Example</Link>
        </li>
        <li>
          <p>Multi state modification</p>
          <Link to="/multi-state">Multiple States Example</Link>
        </li>
        <li>
          <p>Timer</p>
          <Link to="/timer">Timer Example</Link>
        </li>
        <li>
          <p>Contant show or hide</p>
          <Link to="/show-hide">Show/Hide Example</Link>
        </li>
        <li>
          <p>Fetch API data and store it in state</p>
          <Link to="/fetch-example">API Fetch Example</Link>
        </li>
        <li>
          <p>Complex nasted state updating</p>
          <Link to="/complex-state">Complex State Example</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
