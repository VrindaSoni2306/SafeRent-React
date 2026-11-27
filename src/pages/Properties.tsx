import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/property-card/PropertyCard";
import "./Properties.css";

function Properties() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Search and Price Filter
  const filteredProperties = properties.filter((property) => {

    const matchesSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.city.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesPrice =
      maxPrice === "" || property.price <= Number(maxPrice);

    return matchesSearch && matchesPrice;
  });

  return (

    <div className="properties-page">

      {/* Heading */}

      <section className="properties-heading">

        <h1>Find Your Perfect Home</h1>

        <p>
          Explore comfortable and affordable rental properties
          with SafeRent.
        </p>

      </section>


      {/* Search and Filter */}

      <section className="property-filters">

        <input
          type="text"
          placeholder="Search by property name or location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        >

          <option value="">All Price Ranges</option>
          <option value="15000">Up to ₹15,000</option>
          <option value="20000">Up to ₹20,000</option>
          <option value="30000">Up to ₹30,000</option>

        </select>

      </section>


      {/* Property Listing */}

      <section className="property-listing">

        <div className="listing-title">

          <h2>Available Properties</h2>

          <span>
            {filteredProperties.length} Properties Found
          </span>

        </div>


        {/* Reusable Property Cards */}

        <div className="property-grid">

          {filteredProperties.length > 0 ? (

            filteredProperties.map((property) => (

              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={(id) => navigate(`/property/${id}`)}
              />

            ))

          ) : (

            <div className="no-properties">

              <h3>No Properties Found</h3>

              <p>
                Try changing your search or price filter.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>

  );
}

export default Properties;