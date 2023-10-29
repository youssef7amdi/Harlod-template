function Service({ serviceItem }) {
  const { iconComponent, service, serviceParagraph, color } = serviceItem;
  return (
    <div className="service-box">
      <div
        className="icon"
        style={{ color: color, backgroundColor: `${color}30` }}
      >
        {iconComponent}
      </div>
      <h3>{service}</h3>
      <p>{serviceParagraph}</p>
    </div>
  );
}

export default Service;
