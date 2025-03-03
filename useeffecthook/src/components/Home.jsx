import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>useEffect Hook Examples</h1>
      <p className="def"><strong>
        The useEffect hook is mainly used in real projects for handling side
        effects in functional components. It helps with tasks like fetching data
        from APIs, managing subscriptions (WebSockets, event listeners),
        updating the document title, and handling user authentication state. It
        ensures that these effects run at the right time—on component mount,
        update, or unmount—making React apps more efficient and responsive.
      </strong></p>
      <p className="para">Click on any example to see its implementation:</p>
      <ol>
        <li>
          <p>Useful for maps, weather apps, and location-based services.</p>
          <Link to="/geo-location">GeoLocation (Get User Location)</Link>
        </li>
        <li>
          <p>Warns users before leaving the page.</p>
          <Link to="/change-theme">Change Theme Locally Example</Link>
        </li>
        <li>
          <p>Displays live mouse coordinates. (Tracking Mouse Position)</p>
          <Link to="/mouse-tracker">Mouse Tracker Example</Link>
        </li>
        <li>
          <p>Auto logout users after inactivity for security reasons.</p>
          <Link to="/auto-logout">Auto Logout Page </Link>
        </li>
        <li>
          <p>Notifying users when they lose internet connection.</p>
          <Link to="/online-status">Online Status Checker </Link>
        </li>
        <li>
          <p>Optimizing API calls in search inputs (e.g., Google search).</p>
          <Link to="/debounce-search">
            Debounce Search (Optimize API Calls in Search)
          </Link>
        </li>
        <li>
          <p>Requesting push notification permissions in web apps.</p>
          <Link to="/notification-permission">
            Notification Permission (Request User Notification Permission)
          </Link>
        </li>
        <li>
          <p>
            Used for warns users before leaving the page or refreshing the page.
          </p>
          <Link to="/before-reload">Warning Before page Reload Example</Link>
        </li>
        <li>
          <p>Used to Fetch data from APIs</p>
          <Link to="/fetch-api">API Fetch Example</Link>
        </li>
        <li>
          <p>
            Used for real-time chat applications, live notifications, or stock
            price updates.
          </p>
          <Link to="/websocket-chat">
            WebSocket Chat (Real-Time WebSocket Chat Listener)
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
