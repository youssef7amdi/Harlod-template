import { useState } from "react";

function SocialItem({
  color,
  url = "#",
  size = "50px",
  font = "23px",
  children,
}) {
  const [onHover, setOnHover] = useState(false);

  const socialStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    marginLeft: "5px",
    borderRadius: "50%",
    border: `1.5px solid #${color}`,
    color: `${onHover ? "white" : `#${color}`}`,
    fontSize: font,
    transition: ".3s ease",
    backgroundColor: `${onHover ? `#${color}` : `transparent`}`,
  };

  return (
    <a
      href={url}
      style={socialStyle}
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      {children}
    </a>
  );
}

export default SocialItem;
