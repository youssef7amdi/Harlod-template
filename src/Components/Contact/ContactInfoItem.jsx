function ContactInfoItem({ item }) {
  const { title, icon, text } = item;
  return (
    <div className="info-item">
      <h4 className="info-title">{title}</h4>
      <div className="info-container">
        <span className="icon">{icon}</span>
        <span className="text">
          {text.line1}
          <br />
          {text.line2}
        </span>
      </div>
    </div>
  );
}

export default ContactInfoItem;
