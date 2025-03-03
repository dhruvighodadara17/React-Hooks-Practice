import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/examples/Counter";
import ToggleTheme from "./components/examples/ToggleTheme";
import FormInput from "./components/examples/FormInput";
import ArrayManipulation from "./components/examples/ArrayManipulation";
import ObjectState from "./components/examples/ObjectState";
import MultiState from "./components/examples/MultiState";
import Timer from "./components/examples/Timer";
import ShowHide from "./components/examples/ShowHide";
import FetchExample from "./components/examples/FetchExample";
import ComplexState from "./components/examples/ComplexState";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle-theme" element={<ToggleTheme />} />
        <Route path="/form-input" element={<FormInput />} />
        <Route path="/array-manipulation" element={<ArrayManipulation />} />
        <Route path="/object-state" element={<ObjectState />} />
        <Route path="/multi-state" element={<MultiState />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/show-hide" element={<ShowHide />} />
        <Route path="/fetch-example" element={<FetchExample />} />
        <Route path="/complex-state" element={<ComplexState />} />
      </Routes>
    </div>
  );
};

export default App;
