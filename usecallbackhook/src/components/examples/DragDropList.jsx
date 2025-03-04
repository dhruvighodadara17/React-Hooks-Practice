import React, { useState, useCallback } from "react";

const DragDropList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const onDragStart = useCallback((e, index) => {
    e.dataTransfer.setData("dragIndex", index);
  }, []);

  const onDrop = useCallback(
    (e, index) => {
      const dragIndex = e.dataTransfer.getData("dragIndex");
      const newItems = [...items];
      const draggedItem = newItems.splice(dragIndex, 1)[0];
      newItems.splice(index, 0, draggedItem);
      setItems(newItems);
    },
    [items]
  );

  return (
    <div>
      <h2>Drag & Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "5px",
            }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;
