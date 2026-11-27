
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We're here to help you with your rental journey.</p>

          <p><strong>Email:</strong> support@saferent.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Punjab, India</p>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />

          <button type="submit">Send Message</button>
        </form>

      </section>
    </div>
  );
}

export default Contact;
