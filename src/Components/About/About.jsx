import AboutImgBox from "./AboutImgBox";
import AboutInfo from "./AboutInfo";

import "./about.css";

function About() {
  return (
    <div id="about">
      <div className="about-container container">
        <AboutImgBox />
        <AboutInfo />
      </div>
    </div>
  );
}

export default About;
