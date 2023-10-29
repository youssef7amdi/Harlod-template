import CompanyLinks from "./CompanyLinks";
import FooterInfo from "./FooterInfo";
import SignUp from "./SignUp";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-container container">
        <FooterInfo />
        <CompanyLinks />
        <SignUp />
      </section>
    </footer>
  );
}

export default Footer;
