function WorkItem({ workItem }) {
  const { imageSrc, title, description } = workItem;
  return (
    <div className="work-item-box">
      <img src={imageSrc} alt="error" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default WorkItem;
