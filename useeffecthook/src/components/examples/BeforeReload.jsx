import React, { useEffect } from "react";

const BeforeReload = () => {
  useEffect(() => {
    const handleUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave?";
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return <h2>Before Unload Example</h2>;
};

export default BeforeReload;
