import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import "./contact.css";

function Contact() {
  return (
    <div id="contact">
      <section className="contact-container container">
        <ContactInfo />
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
