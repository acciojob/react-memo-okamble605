import React, { useMemo } from "react";

const UseMemoComponent = ({ todos }) => {
  // Simulate an expensive calculation
  const longRunningCalculation = (num) => {
    console.log("Running expensive calculation...");
    return num * 10;
  };

  const computedValue = useMemo(() => longRunningCalculation(todos.length), [todos]);

  return (
    <div>
      <h3>UseMemo Example</h3>
      <p>Computed Value (Todos * 10): {computedValue}</p>
    </div>
  );
};

export default UseMemoComponent;
