import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Your name"
        className="input-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        className="input-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Subject.."
        className="input-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        className="input-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" className="btn-submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactUs;
