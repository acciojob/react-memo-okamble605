import React from "react";

const SkillList = React.memo(({ skills, addSkill, skill, setSkill }) => {
  return (
    <div>
      <h2>React.memo</h2>
      <input 
        type="text" 
        value={skill} 
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

export default SkillList;
