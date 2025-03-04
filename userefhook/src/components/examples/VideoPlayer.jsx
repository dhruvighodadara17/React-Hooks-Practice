import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play(); // Play video
  };

  const handlePause = () => {
    videoRef.current.pause(); // Pause video
  };

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}
export default VideoPlayer;
