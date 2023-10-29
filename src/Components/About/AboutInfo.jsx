import { useState } from "react";

import SectionHeading from "../reusable-components/SectionHeading";
import AboutNav from "./AboutNav";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

const aboutHeading = {
  heading: "About Me",
  largeParagraph:
    "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout. The point of using normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..",
  centrality: "left",
  fontSize: "25px",
};

function AboutInfo() {
  const [aboutNavItem, setAboutNavItem] = useState("skills");

  return (
    <div className="about-info">
      <SectionHeading sectionHeading={aboutHeading} />
      <AboutNav aboutNavItem={aboutNavItem} setAboutNavItem={setAboutNavItem} />
      {aboutNavItem === "skills" && <Skills />}
      {aboutNavItem === "experience" && <Experience />}
      {aboutNavItem === "education" && <Education />}
    </div>
  );
}

export default AboutInfo;
