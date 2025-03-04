import { useRef } from "react";

function Form() {
  const formData = useRef({});

  const handleChange = (e) => {
    formData.current[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData.current);
  };

  return (
    <div>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Form;
