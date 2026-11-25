
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-tagline">
            YOUR HOME, YOUR COMFORT
          </span>

          <h1>
            Find a Place <br />
            You'll Love to <span>Call Home.</span>
          </h1>

          <p>
            Discover comfortable and affordable rental properties.
            Your perfect home is just a few clicks away with SafeRent.
          </p>

          <div className="hero-buttons">
            <Link to="/properties" className="explore-btn">
              Explore Properties
            </Link>

            <Link to="/about" className="learn-btn">
              Learn More
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900"
            alt="Beautiful modern house"
          />
        </div>

      </section>

      <section className="why-choose-section">
  <div className="section-heading">
    <span>WHY SAFERENT?</span>
    <h2>Why Choose SafeRent?</h2>
    <p>
      We make finding your next rental home simple, comfortable and reliable.
    </p>
  </div>

  <div className="features-container">
    <div className="feature-card">
      <div className="feature-icon">🏡</div>
      <h3>Find Your Perfect Home</h3>
      <p>
        Explore different rental properties and find a place that suits your needs.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">🔒</div>
      <h3>Safe and Secure</h3>
      <p>
        Discover a platform designed to make your rental journey more reliable.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">⚡</div>
      <h3>Easy Booking</h3>
      <p>
        Browse properties and send booking requests with just a few clicks.
      </p>
    </div>
  </div>
</section>

<section className="how-it-works">
  <div className="section-heading">
    <span>SIMPLE PROCESS</span>
    <h2>How SafeRent Works</h2>
    <p>Finding your next home is just three simple steps away.</p>
  </div>

  <div className="steps-container">
    <div className="step-card">
      <div className="step-number">01</div>
      <h3>Explore Properties</h3>
      <p>Browse available rental properties and find your perfect match.</p>
    </div>

    <div className="step-card">
      <div className="step-number">02</div>
      <h3>Send a Booking Request</h3>
      <p>Choose a property and send your booking request to the owner.</p>
    </div>

    <div className="step-card">
      <div className="step-number">03</div>
      <h3>Connect with Owners</h3>
      <p>Connect with the property owner and move closer to your new home.</p>
    </div>
  </div>
</section>

<section className="home-cta">
  <h2>Ready to Find Your New Home?</h2>
  <p>Start exploring rental properties and find a place you'll love.</p>
  <Link to="/properties" className="cta-btn">
    Explore Properties
  </Link>
</section>

    </div>
  );
}

export default Home;
