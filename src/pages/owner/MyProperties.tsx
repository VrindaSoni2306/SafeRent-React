import { useState } from 'react';
import './MyProperties.css';

interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  rent: number;
  availableRooms: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

function MyProperties() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      title: 'Luxury Apartment',
      type: 'Apartment',
      location: 'Chandigarh',
      rent: 15000,
      availableRooms: 2,
      status: 'Approved',
    },
    {
      id: 2,
      title: 'Modern House',
      type: 'House',
      location: 'Rajpura',
      rent: 12000,
      availableRooms: 3,
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Single Room',
      type: 'Room',
      location: 'Patiala',
      rent: 5000,
      availableRooms: 1,
      status: 'Rejected',
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [editForm, setEditForm] = useState({
    title: '',
    type: '',
    location: '',
    rent: '',
    availableRooms: '',
  });

  // Edit button
  const handleEdit = (property: Property) => {
    setEditingId(property.id);

    setEditForm({
      title: property.title,
      type: property.type,
      location: property.location,
      rent: String(property.rent),
      availableRooms: String(property.availableRooms),
    });
  };

  // Input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  // Save updated property
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === editingId
          ? {
              ...property,
              title: editForm.title,
              type: editForm.type,
              location: editForm.location,
              rent: Number(editForm.rent),
              availableRooms: Number(editForm.availableRooms),
            }
          : property
      )
    );

    setEditingId(null);
    alert('Property updated successfully!');
  };

  // Delete property
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this property?'
    );

    if (confirmDelete) {
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== id)
      );

      alert('Property deleted successfully!');
    }
  };

  return (
    <div className="my-properties-container">
      <h1>My Properties</h1>
      <p>Manage all your listed properties here.</p>

      {/* Edit Form */}
      {editingId !== null && (
        <form className="edit-property-form" onSubmit={handleUpdate}>
          <h2>Edit Property</h2>

          <label>Property Title</label>
          <input
            type="text"
            name="title"
            value={editForm.title}
            onChange={handleChange}
            required
          />

          <label>Property Type</label>
          <select
            name="type"
            value={editForm.type}
            onChange={handleChange}
            required
          >
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Room">Room</option>
            <option value="Villa">Villa</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={editForm.location}
            onChange={handleChange}
            required
          />

          <label>Monthly Rent (₹)</label>
          <input
            type="number"
            name="rent"
            value={editForm.rent}
            onChange={handleChange}
            min="1"
            required
          />

          <label>Available Rooms</label>
          <input
            type="number"
            name="availableRooms"
            value={editForm.availableRooms}
            onChange={handleChange}
            min="0"
            required
          />

          <div className="edit-form-buttons">
            <button type="submit">Save Changes</button>

            <button
              type="button"
              onClick={() => setEditingId(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Property Cards */}
      <div className="properties-list">
        {properties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          properties.map((property) => (
            <div className="property-card" key={property.id}>
              <h2>{property.title}</h2>

              <p><strong>Type:</strong> {property.type}</p>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Monthly Rent:</strong> ₹{property.rent}</p>
              <p>
                <strong>Available Rooms:</strong> {property.availableRooms}
              </p>

              <span className={`status ${property.status.toLowerCase()}`}>
                {property.status}
              </span>

              <div className="property-actions">
                <button onClick={() => handleEdit(property)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(property.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyProperties;