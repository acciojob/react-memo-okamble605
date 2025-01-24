import React, { useState, useMemo } from "react";
import UseMemoComponent from "./components/UseMemo";
import ReactMemoComponent from "./components/ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (inputValue.length > 5) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Using useMemo to memoize the todo count
  const todoCount = useMemo(() => {
    console.log("Recalculating todo count...");
    return todos.length;
  }, [todos]);

  return (
    <div className="container">
      <h2>React Memo Assignment</h2>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a custom task"
      />
      <button onClick={addCustomTodo}>Submit</button>

      <p>Total Todos: {todoCount}</p>
      <UseMemoComponent todos={todos} />
      <ReactMemoComponent todos={todos} />
    </div>
  );
};

export default App;
