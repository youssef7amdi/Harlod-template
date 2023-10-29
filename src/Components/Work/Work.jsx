import { work1 } from "../../constants/images";

import SectionHeading from "../reusable-components/SectionHeading";
import WorkItem from "./WorkItem";

import "./work.css";

const workHeading = {
  heading: "My Latest Work",
  largeParagraph: "Prefect solution for digital experience.",
  centrality: "left",
  fontSize: "20px",
};

const workItems = [
  {
    imageSrc: work1,
    title: "App Design",
    description: "Mobile App",
  },
  {
    imageSrc: work1,
    title: "Web Design",
    description: "E-Commerce",
  },
  {
    imageSrc: work1,
    title: "UI & UX Design",
    description: "Mobile App",
  },
];

function Work() {
  return (
    <div id="work">
      <div className="work-container container">
        <div className="work-header">
          <SectionHeading sectionHeading={workHeading} />
          <a href="#">More Work →</a>
        </div>
        <section className="work-items grid-3">
          {workItems.map((item) => (
            <WorkItem key={item.title} workItem={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Work;
