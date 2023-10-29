const links = [
  "home",
  "about",
  "services",
  "work",
  "pricing",
  "testimonial",
  "blog",
  "contact",
];

function NavLinks({ isShow, setIsShow }) {
  return (
    <ul className={`nav-links ${isShow ? "showed" : ""}`}>
      {links.map((link) => (
        <li key={link}>
          <a
            href={`#${link === "home" ? "" : link}`}
            onClick={() => setIsShow(false)}
          >
            {link.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
