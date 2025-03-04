import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/examples/Counter";
import DebounceInput from "./components/examples/DebounceInput";
import SearchList from "./components/examples/SearchList";
import Parent from "./components/examples/Parent";
import Timer from "./components/examples/Timer";
import ChatApp from "./components/examples/ChatApp";
import InfiniteScroll from "./components/examples/InfiniteScroll";
import DragDropList from "./components/examples/DragDropList";
import SearchSuggestion from "./components/examples/SearchSuggestion";
import FormSubmit from "./components/examples/FormSubmit";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/debounce-input" element={<DebounceInput />} />
        <Route path="/search-list" element={<SearchList />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/chat-app" element={<ChatApp />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/dragdrop-list" element={<DragDropList />} />
        <Route path="/search-suggestion" element={<SearchSuggestion />} />
        <Route path="/form-submit" element={<FormSubmit />} />
      </Routes>
    </div>
  );
};

export default App;
