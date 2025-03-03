import React, { useState } from "react";

const ShowHide = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Show/Hide Example</h2>
      {visible && <p>This is a toggleable text.</p>}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ShowHide;
