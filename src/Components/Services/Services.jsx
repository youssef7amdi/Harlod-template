import { FaSyncAlt, FaFigma } from "react-icons/fa";
import { BiMessageAdd, BiLineChart } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";

import SectionHeading from "../reusable-components/SectionHeading";
import Service from "./Service";

import "./services.css";

const serviceHeading = {
  smallParagraph: "What We Offer",
  heading: "Affordable Services",
  largeParagraph:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.",
  centrality: "center",
  fontSize: "20px",
  margin: "auto",
};

const services = [
  {
    iconComponent: <FaSyncAlt />,
    service: "Research & Analysis",
    serviceParagraph:
      "We use a customized application specifically designed a testing gnose to keep away for people.",
    color: "#8060cf",
  },
  {
    iconComponent: <BiMessageAdd />,
    service: "Web Development",
    serviceParagraph:
      "We use a customized application specifically designed a testing gnose to keep away for people.",
    color: "#c71f1f",
  },
  {
    iconComponent: <BsServer />,
    service: "Network Management",
    serviceParagraph:
      "We use a customized application specifically designed a testing gnose to keep away for people.",
    color: "#ffcd00",
  },
  {
    iconComponent: <FaFigma />,
    service: "UI & UX Designer",
    serviceParagraph:
      "We use a customized application specifically designed a testing gnose to keep away for people.",
    color: "#2558ab",
  },
  {
    iconComponent: <BiLineChart />,
    service: "Mobile App Development",
    serviceParagraph:
      "We use a customized application specifically designed a testing gnose to keep away for people.",
    color: "#2fb4ae",
  },
  {
    iconComponent: <LuMailOpen />,
    service: "Hosting Management",
    serviceParagraph:
      "We use a customized application specifically designed a testing gnose to keep away for people.",
    color: "#b6317a",
  },
];

function Services() {
  return (
    <div id="services" className="services">
      <SectionHeading sectionHeading={serviceHeading} />
      <div className="service-container container grid-3">
        {services.map((item) => (
          <Service serviceItem={item} key={item.service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
