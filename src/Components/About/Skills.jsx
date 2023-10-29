import Skill from "./Skill";

const mySkills = [
  { name: "Development", percentage: "65%", color: "#0d6efd" },
  { name: "Design", percentage: "95%", color: "#ffcd00" },
  { name: "Branding", percentage: "80%", color: "#ffcd00" },
];

function Skills() {
  return (
    <div className="skills">
      {mySkills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;
