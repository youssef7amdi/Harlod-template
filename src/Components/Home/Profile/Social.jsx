import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialItem from "../../reusable-components/SocialItem";

const brands = [
  {
    component: <FaFacebook />,
    url: "#",
    color: "1877f2",
  },
  {
    component: <FaTwitter />,
    url: "#",
    color: "1da1f2",
  },
  {
    component: <FaInstagram />,
    url: "#",
    color: "e1306c",
  },
  {
    component: <FaLinkedin />,
    url: "#",
    color: "004182",
  },
];

function Social() {
  return (
    <div className="social">
      {brands.map((item) => (
        <SocialItem key={item.color} color={item.color} url={item.url}>
          {item.component}
        </SocialItem>
      ))}
    </div>
  );
}

export default Social;
