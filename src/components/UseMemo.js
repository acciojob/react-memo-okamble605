import React, { useMemo } from "react";

const UseMemoDemo = ({ tasks }) => {
  // Expensive function that calculates the longest task
  const longestTask = useMemo(() => {
    console.log("Computing longest task...");
    return tasks.reduce((longest, task) =>
      task.length > longest.length ? task : longest, "");
  }, [tasks]);

  return (
    <div className="use-memo">
      <h2>Longest Task:</h2>
      <p>{longestTask || "No tasks yet"}</p>
    </div>
  );
};

export default UseMemoDemo;
