import React, { useState, useMemo } from "react";
import ExpensiveCalculation from "./ReactMemo";
import SkillList from "./UseMemo";

const App = () => {
  const [todos, setTodos] = useState(["New Todo"]);
  const [count, setCount] = useState(0);
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const addSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
      <hr style={{ margin: "5px 0", border: "1px solid black" }} />

      <p>Count: {count}<button onClick={increment}>+</button></p>
      
      <ExpensiveCalculation count={count} />
      <hr style={{ margin: "5px 0", border: "1px solid black" }} />
      <hr style={{ margin: "5px 0", border: "1px solid black" }} />

      <SkillList skills={skills} addSkill={addSkill} skill={skill} setSkill={setSkill} />
    </div>
  );
};

export default App;
