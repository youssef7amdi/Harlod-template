import "./sectionHeading.css";

function SectionHeading({ sectionHeading }) {
  const {
    smallParagraph,
    heading,
    largeParagraph,
    centrality,
    fontSize,
    margin,
  } = sectionHeading;
  return (
    <div
      className="section-heading"
      style={{
        textAlign: centrality,
        fontSize: fontSize,
        margin: margin,
      }}
    >
      {smallParagraph?.length > 0 && (
        <p className="sm-paragraph">{smallParagraph}</p>
      )}
      <h2 className="heading">{heading}</h2>
      {largeParagraph?.length > 0 && (
        <p className="lg-paragraph">{largeParagraph}</p>
      )}
    </div>
  );
}

export default SectionHeading;
