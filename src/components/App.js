import React, { useState, useMemo } from "react";
import UseMemoDemo from "./UseMemo";
import ReactMemoDemo from "./ReactMemo";
import "./styles.css"; // Import CSS

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [customTask, setCustomTask] = useState("");

  // Memoize task list length
  const taskCount = useMemo(() => tasks.length, [tasks]);

  // Function to add a new task
  const addTask = () => {
    setTasks([...tasks, "New todo"]);
  };

  // Function to handle custom task input
  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  // Function to submit a custom task (only if length > 5)
  const submitTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters.");
    }
  };

  return (
    <div className="app">
      <h1>React Memo Task Manager</h1>
      <button onClick={addTask}>Add todo</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Counter: {count}</p>
      <p>Task Count: {taskCount}</p>
      <input
        type="text"
        value={customTask}
        onChange={handleInputChange}
        className="memo-input"
      />
      <button onClick={submitTask}>Submit</button>
      <UseMemoDemo tasks={tasks} />
      <ReactMemoDemo tasks={tasks} />
    </div>
  );
};

export default App;
