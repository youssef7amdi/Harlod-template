import { useEffect, useState } from "react";

import Social from "./Social";

function ProfileInfo() {
  const name = "Youssef Hamdi.";
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(
    function () {
      if (currentIndex === name.length) {
        const timeOut = setTimeout(() => {
          setCurrentText((prevText) => prevText[0]);
          setCurrentIndex(1);
        }, 1500);
        return () => clearTimeout(timeOut);
      }
      if (currentIndex < name.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + name[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    },
    [currentIndex]
  );

  return (
    <div className="profile-info">
      <p className="hello">Hello I am</p>
      <h1 className="name">
        {currentText}
        <span />
      </h1>
      <p className="info">
        Building simple and beautiful things for complex interfaces is what I
        enjoy most about my work. I am also interested in crafting beautiful
        minimal products and exploring new worlds.
      </p>
      <Social />
      <a href="#work" className="see-work">
        See my work &nbsp; →
      </a>

      <div className="arrow">
        <span>←</span>
        <span>→</span>
      </div>
    </div>
  );
}

export default ProfileInfo;
