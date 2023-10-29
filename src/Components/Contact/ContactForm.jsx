import SectionHeading from "../reusable-components/SectionHeading";
import ContactUs from "./ContactUs";

const contactFormHeading = {
  smallParagraph: "Let's talk",
  heading: "Enter your project details",
  largeParagraph:
    "'Content here, content here', making it look like readable English. Many desktop publishing packages.",
  centrality: "left",
  fontSize: "20px",
};

function ContactForm() {
  return (
    <div className="contact-form-container">
      <SectionHeading sectionHeading={contactFormHeading} />
      <ContactUs />
    </div>
  );
}

export default ContactForm;
