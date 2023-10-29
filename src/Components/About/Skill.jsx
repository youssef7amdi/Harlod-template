function Skill({ skill }) {
  const { name, percentage, color } = skill;
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{percentage}</span>
      </div>
      <div className="skill-progress-container">
        <span
          className="progress"
          style={{ width: percentage, backgroundColor: color }}
        ></span>
      </div>
    </div>
  );
}

export default Skill;
