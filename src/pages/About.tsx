
import './About.css';

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About SafeRent</h1>
        <p>Making your house-hunting journey easier and more comfortable.</p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          SafeRent is a rental property platform that helps people
          find suitable homes and connects property seekers with owners.
          Our goal is to make renting simple and convenient.
        </p>
      </section>

      <section className="mission-vision">
        <div>
          <h2>Our Mission</h2>
          <p>To make finding and renting a home simple, convenient and reliable.</p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>To become a trusted platform for property seekers and owners.</p>
        </div>
      </section>

    </div>
  );
}

export default About;
