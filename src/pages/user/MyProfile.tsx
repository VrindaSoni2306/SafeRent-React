import { useState } from 'react';
import './MyProfile.css';

function MyProfile() {
  const [profile, setProfile] = useState({
    name: 'Vanshdeep',
    email: 'vanshdeep@example.com',
    phone: '9876543210',
    city: 'Rajpura',
    address: 'Punjab, India',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="my-profile-page">
      <div className="profile-heading">
        <h1>My Profile</h1>
        <p>Manage your personal information.</p>
      </div>

      <div className="profile-container">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <h2>{profile.name}</h2>
          <p>SafeRent User</p>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="profile-form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="profile-form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="profile-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="profile-form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="profile-form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="save-profile-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyProfile;