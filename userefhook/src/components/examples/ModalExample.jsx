import { useRef } from "react";

function ModalExample() {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.style.display = "block";
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <div
        ref={modalRef}
        style={{
          display: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          background: "white",
          padding: "20px",
          border: "1px solid black",
        }}>
        <p>This is a modal!</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
export default ModalExample;
