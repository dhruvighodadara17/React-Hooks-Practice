import React, { useState } from "react";

const FormInput = () => {
  const [text, setText] = useState("");
  return (
    <div className="container" style={{
        width: "215vh",
        height: "95vh",
        textAlign:"center"
    }}>
      <h2>Form Input Example</h2>
      <input style={{height:"2em", padding:"0.5em", fontSize:"1rem"}}
      placeholder="Enter Text"
        type="text"
        value={text}
        // onClick={()=> setText("")}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default FormInput;
