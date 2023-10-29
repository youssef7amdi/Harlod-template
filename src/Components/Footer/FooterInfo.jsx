import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from "../reusable-components/Logo";
import SocialItem from "../reusable-components/SocialItem";

const brands = [
  {
    id: 1,
    component: <FaFacebook />,
    url: "#",
    color: "2fb4ae",
  },
  {
    id: 2,

    component: <FaTwitter />,
    url: "#",
    color: "2fb4ae",
  },
  {
    id: 3,

    component: <FaInstagram />,
    url: "#",
    color: "2fb4ae",
  },
  {
    id: 4,
    component: <FaLinkedin />,
    url: "#",
    color: "2fb4ae",
  },
];

function FooterInfo() {
  return (
    <div className="footer-info">
      <Logo />
      <p>
        A Private Limited is the most popular type of partnership Malta. The
        Limited liability is, in fact, the only type of company allowed by
        Companies.
      </p>
      <div className="social">
        {brands.map((item) => (
          <SocialItem
            key={item.id}
            color={item.color}
            url={item.url}
            size="35px"
            font="15px"
          >
            {item.component}
          </SocialItem>
        ))}
      </div>
    </div>
  );
}

export default FooterInfo;
