import type { Property } from "../../data/properties";
import "./PropertyCard.css";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (id: number) => void;
}

function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  return (
    <div className="property-card">
      <img
        src={property.image}
        alt={property.title}
        className="property-card-image"
      />

      <div className="property-card-content">
        <h3>{property.title}</h3>

        <p className="property-card-location">
          📍 {property.location}
        </p>

        <div className="property-card-info">
          <span>🛏️ {property.bedrooms} Beds</span>
          <span>🚿 {property.bathrooms} Baths</span>
          <span>📐 {property.area} sq.ft.</span>
        </div>

        <div className="property-card-bottom">
          <h3>₹{property.price.toLocaleString("en-IN")}/month</h3>

          <button onClick={() => onViewDetails(property.id)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;