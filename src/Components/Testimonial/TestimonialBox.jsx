function TestimonialBox({ testimonial }) {
  const { imageSrc, name, role, text } = testimonial;
  return (
    <div className="testimonial-box">
      <img src={imageSrc} alt="error" />
      <p className="text">{text}</p>
      <h4 className="name">{name}</h4>
      <span className="role">{role}</span>
    </div>
  );
}

export default TestimonialBox;
