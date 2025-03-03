# Hooks-practice

<h1> Different different hook wise practice</h1>

<div><h3>useState Hook:- </h3>The useState hook is used in real projects to manage component-level state in functional components. It helps with tasks like handling form inputs, toggling UI elements (like modals or dark mode), managing counters, and storing fetched API data. It allows components to re-render dynamically when state changes, making React applications interactive and responsive.</div>
<br>
<div><h3>useEffect Hook:- </h3>
The useEffect hook is mainly used in real projects for handling side effects in functional components. It helps with tasks like fetching data from APIs, managing subscriptions (WebSockets, event listeners), updating the document title, and handling user authentication state. It ensures that these effects run at the right time—on component mount, update, or unmount—making React apps more efficient and responsive.</div>
<br>
<div><h3>useReducer Hook:- </h3>The useReducer hook is mainly used in real projects for managingcomplex state logic in a structured and scalable way. It is usefulwhen multiple related state updates are required, such as handling forms, managing authentication, implementing shopping carts, and controlling UI components like modals or pagination. It provides a centralized state management approach that improves maintainability, especially in large applications.</div>
<br>
<div><h3>useCallback Hook:- </h3>The useCallback hook is a built-in React hook that memoizes functions, preventing them from being re-created on every render. It is useful when passing functions as props to child components, optimizing event handlers, and improving performance in heavy computations. useCallback ensures that a function remains the same unless its dependencies change, reducing unnecessary re-renders in components.</div>

<div><h3>useMemo Hook:- </h3>useMemo is a React hook that memoizes a computed value, preventing unnecessary recalculations on every render. It is mainly used to optimize expensive computations, filter or sort large datasets, and prevent unnecessary object re-creations that could cause unnecessary re-renders. The hook runs the computation only when its dependencies change, improving performance by avoiding redundant operations. It should be used wisely, as excessive use can increase complexity without significant benefits.</div>

<div><h3>useRef Hook:- </h3>The useRef hook is a built-in React hook that creates a mutable reference that persists across renders without causing re-renders. It is commonly used to access and manipulate DOM elements directly, store previous state values, or persist values without triggering re-renders. Unlike useState, updating a useRef value does not cause the component to re-render.</div>
