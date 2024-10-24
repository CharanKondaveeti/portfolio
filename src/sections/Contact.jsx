import "./css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>
        While I'm always looking for new opportunities, I'm currently looking
        for an awesome team to code with.
      </p>

      <div className="contact-buttons">
        <a className="button email" href="charankondaveeti27@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email Me
        </a>
        <a
          className="button whatsapp"
          href="https://wa.me/916303404327"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon /> WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
