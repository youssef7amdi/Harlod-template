function BlogInfo({ title, paragraph, moreUrl }) {
  return (
    <div className="blog-info">
      <h3 className="blog-title">{title}</h3>
      <p className="blog-text">{paragraph}</p>
      <a href={moreUrl} className="learn-more">
        Learn More →
      </a>
    </div>
  );
}

export default BlogInfo;
