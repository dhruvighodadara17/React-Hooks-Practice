import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>useRef Hook Examples</h1>
      <p className="def">
        <strong>
          The useRef hook is a built-in React hook that creates a mutable
          reference that persists across renders without causing re-renders. It
          is commonly used to access and manipulate DOM elements directly, store
          previous state values, or persist values without triggering
          re-renders. Unlike useState, updating a useRef value does not cause
          the component to re-render.
        </strong>
      </p>
      <p className="para">Click on any example to see its implementation:</p>
      <div className="links">
        <div>
          <p>Accessing and Manipulating DOM Elements</p>
          <Link to="/focus-input">Focus on Input</Link>
        </div>
        <div>
          <p>Storing Values Without Re-renders</p>
          <Link to="/track-previous">Track Previous Value</Link>
        </div>
        <div>
          <p>Holding References (e.g., Timers, Intervals)</p>
          <Link to="/timer-sec">Timer System</Link>
        </div>
        <div>
          <p>Persisting Form Data Without Re-renders</p>
          <Link to="/form">Login Form</Link>
        </div>
        <div>
          <p>Scroll to Bottom in Chat App</p>
          <Link to="/chat-box">Chat Box</Link>
        </div>
        <div>
          <p>
            Persisting Scroll Position (Used to store the last scroll position
            when navigating pages)
          </p>
          <Link to="/scroll-position">Scroll Position</Link>
        </div>
        <div>
          <p>
            Preventing Multiple Button Clicks (Debounce Clicks) (Used to prevent
            multiple clicks on a button to avoid duplicate actions) -EX.
            Preventing duplicate form submissions, payment processing.
          </p>
          <Link to="/prevent-multiple-clicks">Prevent Multiple Clicks</Link>
        </div>
        <div>
          <p>
            Smooth Scrolling to a Section Used for scrolling to a specific part
            of the page smoothly.(Usage: Navigation menus, "Back to Top" button)
          </p>
          <Link to="/scroll-to-section">Scroll To Section</Link>
        </div>
        <div>
          <p>
            Pausing and Resuming a Video Player Used to control a video element
            programmatically.
          </p>
          <Link to="/video-player">Video Player</Link>
        </div>
        <div>
          <p>
            Controlling a Modal Dialog (Without State Re-renders) Used to show
            and hide a modal without triggering re-renders.
          </p>
          <Link to="/model">Modal Example</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
