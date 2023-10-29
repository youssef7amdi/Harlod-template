const aboutNav = ["skills", "experience", "education"];

function AboutNav({ aboutNavItem, setAboutNavItem }) {
  function handleClick(item) {
    setAboutNavItem(item);
  }

  return (
    <div className="about-nav">
      {aboutNav.map((navItem) => (
        <button
          key={navItem}
          className={`${aboutNavItem === navItem ? "active" : ""}`}
          onClick={() => handleClick(navItem)}
        >
          {navItem}
        </button>
      ))}
    </div>
  );
}

export default AboutNav;
