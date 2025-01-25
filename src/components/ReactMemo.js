import React, { useMemo } from "react";

const ExpensiveCalculation = ({ count }) => {
  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value...");
    return count * 100000000;
  }, [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{expensiveValue}</p>
    </div>
  );
};

export default ExpensiveCalculation;
