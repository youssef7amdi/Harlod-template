function BlogImg({ imageSrc, icon, color }) {
  return (
    <div className="img-box">
      <img src={imageSrc} alt="error" />
      <span className="icon" style={{ backgroundColor: color }}>
        {icon}
      </span>
    </div>
  );
}

export default BlogImg;
