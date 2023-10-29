import { BsArrowRightShort } from "react-icons/bs";

const companyLinks = [
  {
    title: "Security & Privacy",
    link: "#",
  },
  {
    title: "Support",
    link: "#",
  },
  {
    title: "Term & Condition",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "About Us",
    link: "#",
  },
];

function CompanyLinks() {
  return (
    <div className="company-links">
      <h4>Company</h4>
      <div className="links-container">
        {companyLinks.map((link) => (
          <a className="company-link" href={link.link} key={link.title}>
            <BsArrowRightShort size={"16px"} /> {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default CompanyLinks;
