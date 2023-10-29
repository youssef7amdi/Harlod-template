import SectionHeading from "../reusable-components/SectionHeading";
import Achievement from "./Achievement";

import "./achievements.css";

const achievementsHeading = {
  smallParagraph: "Counter",
  heading: "Our Achievements",
  largeParagraph:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.",
  centrality: "center",
  fontSize: "20px",
  margin: "auto",
};

const achievements = [
  {
    icon: "❤️",
    counter: "800K+",
    description: "Happy Clients",
  },
  {
    icon: "✅",
    counter: "400",
    description: "Project Done",
  },
  {
    icon: "⭐",
    counter: "1000K+",
    description: "Clients Review",
  },
  {
    icon: "😎",
    counter: "20K+",
    description: "Year Experience",
  },
];

function Achievements() {
  return (
    <div id="achievements">
      <SectionHeading sectionHeading={achievementsHeading} />
      <div className="achievements-container container grid-4">
        {achievements.map((item) => (
          <Achievement achievementItem={item} key={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
