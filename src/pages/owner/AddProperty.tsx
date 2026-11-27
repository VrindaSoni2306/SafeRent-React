import { useState } from 'react';
import './AddProperty.css';

function AddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    location: '',
    address: '',
    rent: '',
    rooms: '',
    availableRooms: '',
    amenities: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const rent = Number(formData.rent);
  const rooms = Number(formData.rooms);
  const availableRooms = Number(formData.availableRooms);

  if (rent <= 0) {
    alert('Monthly rent must be greater than zero.');
    return;
  }

  if (rooms <= 0) {
    alert('Total rooms must be at least 1.');
    return;
  }

  if (availableRooms < 0 || availableRooms > rooms) {
    alert('Available rooms cannot exceed total rooms.');
    return;
  }

  console.log('Property Data:', formData);

  alert('Property submitted successfully!');
};

  return (
    <div className="add-property page-container">
      <div className="add-property-header">
        <h1>Add Property</h1>
        <p>Add a new property for admin approval.</p>
      </div>

      <form className="property-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Property Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter property title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Property Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select property type</option>
            <option value="PG">PG</option>
            <option value="Flat">Flat</option>
            <option value="Room">Room</option>
            <option value="House">House</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter city/location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter complete address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Monthly Rent</label>
            <input
              type="number"
              name="rent"
              placeholder="Enter monthly rent"
              value={formData.rent}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Number of Rooms</label>
            <input
              type="number"
              name="rooms"
              placeholder="Total rooms"
              value={formData.rooms}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Available Rooms</label>
            <input
              type="number"
              name="availableRooms"
              placeholder="Available rooms"
              value={formData.availableRooms}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Amenities</label>
          <input
            type="text"
            name="amenities"
            placeholder="WiFi, Parking, AC, Food..."
            value={formData.amenities}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe your property"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-property-btn">
          Submit Property
        </button>
      </form>
    </div>
  );
}

export default AddProperty;