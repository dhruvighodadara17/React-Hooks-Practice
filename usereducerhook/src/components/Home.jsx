import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>useReducer Hook Examples</h1>
      <p className="def">
        <strong>
          The useReducer hook is mainly used in real projects for managing
          complex state logic in a structured and scalable way. It is useful
          when multiple related state updates are required, such as handling
          forms, managing authentication, implementing shopping carts, and
          controlling UI components like modals or pagination. It provides a
          centralized state management approach that improves maintainability,
          especially in large applications.
        </strong>
      </p>
      <p className="para">Click on any example to see its implementation:</p>
      <div className="links">
        <div>
          <p>Used in analytics dashboards, games, or UI interactions.</p>
          <Link to="/counter">Counter</Link>
        </div>
        <div>
          <p>Used in e-commerce websites, POS systems.</p>
          <Link to="/shopping-cart">ShoppingCart</Link>
        </div>
        <div>
          <p>Used in login, registration, or checkout forms.</p>
          <Link to="/form-example">Form Example</Link>
        </div>
        <div>
          <p>Used in task managers, project boards, or reminders apps.</p>
          <Link to="/todo-app">Todo App (ADD / REMOVE/ TOGGLE ITEMS)</Link>
        </div>

        <div>
          <p> Used in news feeds, weather apps, financial data.</p>
          <Link to="/api-component">Api Fetch</Link>
        </div>
        <div>
          <p>Used in blogs, product listings, and dashboards.</p>
          <Link to="/pagination">pagination System</Link>
        </div>

        <div>
          <p>Adds notifications dynamically when triggered, Automatically removes notifications after 3 seconds, Supports multiple types (success, error, warning), Keeps UI clean & interactive with real-time updates.</p>
          <Link to="/notifications">Notifications System</Link>
        </div>

        <div>
          <p>
            Used in survey forms, onboarding wizards, and checkout processes.
          </p>
          <Link to="/multistep-form">MultiStep Form</Link>
        </div>

        <div>
          <p>Used in text editors, drawing apps, spreadsheets.</p>
          <Link to="/undo-redo">Undo Redo Example</Link>
        </div>
        <div>
          <p>
            Used in real-world apps for managing user sessions, login/logout
            handling, and role-based access.
          </p>
          <Link to="/auth-example">
            Authantication ( login/ Logout) Example
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
