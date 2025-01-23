
import React from "react";

// Memoizing task list to prevent unnecessary re-renders
const TaskList = React.memo(({ tasks }) => {
  console.log("Rendering Task List...");
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
});

const ReactMemoDemo = ({ tasks }) => {
  return (
    <div className="react-memo">
      <h2>Task List</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ReactMemoDemo;
import React from "react";

// Memoizing task list to prevent unnecessary re-renders
const TaskList = React.memo(({ tasks }) => {
  console.log("Rendering Task List...");
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
});

const ReactMemoDemo = ({ tasks }) => {
  return (
    <div className="react-memo">
      <h2>Task List</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ReactMemoDemo;
