import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ShoppingCart from "./components/examples/ShoppingCart";
import ApiComponent from "./components/examples/ApiComponent";
import Pagination from "./components/examples/pagination";
import Counter from "./components/examples/Counter";
import TodoApp from "./components/examples/TodoApp";
import MultiStepForm from "./components/examples/MultiStepForm";
import FormExample from "./components/examples/FormExample";
import Notifications from "./components/examples/Notifications";
import UndoRedoExample from "./components/examples/UndoRedoExample";
import AuthExample from "./components/examples/AuthExample";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/undo-redo" element={<UndoRedoExample />} />
        <Route path="/form-example" element={<FormExample />} />
        <Route path="/todo-app" element={<TodoApp />} />

        <Route path="/api-component" element={<ApiComponent />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/multistep-form"
          element={<MultiStepForm />}
        />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/auth-example" element={<AuthExample />} />
      </Routes>
    </div>
  );
};

export default App;
