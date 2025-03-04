import React, { useState, useMemo } from "react";

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true },
  ]);

  // Memoized filtering of completed tasks
  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.completed);
  }, [tasks]);

  return (
    <div>
      <h1>Task List</h1>
      <h2>Completed Tasks: {completedTasks.length}</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          setTasks((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              title: `Task ${prev.length + 1}`,
              completed: Math.random() > 0.5,
            },
          ])
        }>
        Add Random Task
      </button>
    </div>
  );
};

export default CompletedTasks;
