import { VscHome } from "react-icons/vsc";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import SectionHeading from "../reusable-components/SectionHeading";
import ContactInfoItem from "./ContactInfoItem";

const contactInfoHeading = {
  heading: "Let's Connect",
  largeParagraph: "Looking for help? Fill the form and start a new adventure",
  centrality: "left",
  fontSize: "18px",
};

const infoItems = [
  {
    title: "Address :",
    icon: <VscHome />,
    text: {
      line1: `744 New York Ave, Brooklyn, Kings,`,
      line2: `New York 10224`,
    },
  },
  {
    title: "Phone :",
    icon: <FiPhone />,
    text: { line1: "(+642) 245 356 432", line2: "(+420) 336 476 328" },
  },
  {
    title: "Support :",
    icon: <MdMailOutline />,
    text: { line1: "hellosupport@gmail.com", line2: "helpsupport@gmail.com" },
  },
];

function ContactInfo() {
  return (
    <div className="contact-info">
      <SectionHeading sectionHeading={contactInfoHeading} />
      <div className="info-items">
        {infoItems.map((item) => (
          <ContactInfoItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
