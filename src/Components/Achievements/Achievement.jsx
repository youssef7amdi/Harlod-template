function Achievement({ achievementItem }) {
  const { icon, counter, description } = achievementItem;
  return (
    <div className="achievement-box">
      <span className="icon">{icon}</span>
      <div className="counter">{counter}</div>
      <p className="description">{description}</p>
    </div>
  );
}

export default Achievement;
