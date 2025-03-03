import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import GeoLocation from "./components/examples/GeoLocation";
import ThemeSaver from "./components/examples/ThemeSaver";
import MouseTracker from "./components/examples/MouseTracker";
import AutoLogout from "./components/examples/AutoLogout";
import OnlineStatus from "./components/examples/OnlineStatus";
import DebounceSearch from "./components/examples/DebounceSearch";
import NotificationPermission from "./components/examples/NotificationPermission";
import BeforeReload from "./components/examples/BeforeReload";
import FetchExample from "./components/examples/FetchApi";
import WebSocketChat from "./components/examples/WebSocketChat";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch-api" element={<FetchExample />} />
        <Route path="/before-reload" element={<BeforeReload />} />
        <Route path="/change-theme" element={<ThemeSaver />} />
        <Route path="/mouse-tracker" element={<MouseTracker />} />
        <Route path="/auto-logout" element={<AutoLogout />} />
        <Route path="/online-status" element={<OnlineStatus />} />
        <Route path="/debounce-search" element={<DebounceSearch />} />
        <Route
          path="/notification-permission"
          element={<NotificationPermission />}
        />
        <Route path="/geo-location" element={<GeoLocation />} />
        <Route path="/websocket-chat" element={<WebSocketChat />} />
      </Routes>
    </div>
  );
};

export default App;
