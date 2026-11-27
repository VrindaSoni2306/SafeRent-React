
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../data/properties";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  // Book Now button click handler
  const handleBooking = () => {
    navigate("/login");
  };

  if (!property) {
    return (
      <div className="property-details-page">
        <h2>Property Not Found</h2>
        <button onClick={() => navigate("/properties")}>
          Back to Properties
        </button>
      </div>
    );
  }

  return (
    <div className="property-details-page">

      <button
        className="back-button"
        onClick={() => navigate("/properties")}
      >
        ← Back to Properties
      </button>

      <div className="details-image-container">
        <img src={property.image} alt={property.title} />
      </div>

      <div className="details-content">

        <div className="details-main">
          <h1>{property.title}</h1>

          <p className="details-location">
            📍 {property.location}
          </p>

          <div className="details-features">
            <span>🛏️ {property.bedrooms} Bedrooms</span>
            <span>🚿 {property.bathrooms} Bathrooms</span>
            <span>📐 {property.area} sq.ft.</span>
          </div>

          <section className="details-section">
            <h2>About This Property</h2>
            <p>{property.description}</p>
          </section>

          <section className="details-section">
            <h2>Property Amenities</h2>

            <div className="amenities-list">
              {property.amenities.map((amenity, index) => (
                <span key={index}>{amenity}</span>
              ))}
            </div>
          </section>

          <section className="details-section">
            <h2>Property Owner</h2>
            <p>Name: {property.owner}</p>
            <p>Email: {property.ownerEmail}</p>
          </section>
        </div>

        <div className="booking-card">
          <h2>
            ₹{property.price.toLocaleString("en-IN")}
          </h2>

          <span>per month</span>

          <hr />

          <p>Interested in renting this property?</p>

          <button onClick={handleBooking}>
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;