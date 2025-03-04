import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MemoizedFactorial from "./components/examples/MemoisedFactorial";
import UserList from "./components/examples/UserList";
import SortedNumbers from "./components/examples/SortedNumbers";
import ShoppingCart from "./components/examples/ShoppingCart";
import ThemeSwitcher from "./components/examples/ThemeSwitcher";
import FetchData from "./components/examples/FetchData";
import CompletedTasks from "./components/examples/CompletedTasks";
import PaginatedList from "./components/examples/PaginatedList";
import HeavyCalculation from "./components/examples/HeavyCalculation";
import FibonacciSeries from "./components/examples/FibonacciSeries";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memoized-factorial" element={<MemoizedFactorial />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/sorted-numbers" element={<SortedNumbers />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/theme-switcher" element={<ThemeSwitcher />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/paginated-list" element={<PaginatedList />} />
        <Route path="/heavy-calculation" element={<HeavyCalculation />} />
        <Route path="/fibonacci-series" element={<FibonacciSeries />} />
      </Routes>
    </div>
  );
};

export default App;
