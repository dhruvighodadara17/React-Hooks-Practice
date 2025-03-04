import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FocusInput from "./components/examples/FocusInput";
import TrackPreviousValue from "./components/examples/TrackPreviousValue";
import TimerSec from "./components/examples/TimerSec";
import Form from "./components/examples/Form";
import ChatBox from "./components/examples/ChatBox";
import ScrollPosition from "./components/examples/ScrollPosition";
import PreventMultipleClicks from "./components/examples/PreventMultipleClicks";
import ScrollToSection from "./components/examples/ScrollToSection";
import VideoPlayer from "./components/examples/VideoPlayer";
import ModalExample from "./components/examples/ModalExample";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus-input" element={<FocusInput />} />
        <Route path="/track-previous" element={<TrackPreviousValue />} />
        <Route path="/timer-sec" element={<TimerSec />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chat-box" element={<ChatBox />} />
        <Route path="/scroll-position" element={<ScrollPosition />} />
        <Route
          path="/prevent-multiple-clicks"
          element={<PreventMultipleClicks />}
        />
        <Route path="/scroll-to-section" element={<ScrollToSection />} />
        <Route path="/video-player" element={<VideoPlayer />} />
        <Route path="/model" element={<ModalExample />} />
      </Routes>
    </div>
  );
};

export default App;
