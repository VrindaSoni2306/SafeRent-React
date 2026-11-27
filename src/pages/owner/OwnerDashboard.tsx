import './OwnerDashboard.css';
import { useNavigate } from 'react-router-dom';

function OwnerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="owner-dashboard page-container">
      <div className="owner-header">
        <div>
          <h1>Owner Dashboard</h1>
          <p>Welcome back! Manage your properties and booking requests.</p>
        </div>
      </div>

      <div className="owner-stats">
        <div className="owner-stat-card">
          <h3>Total Properties</h3>
          <p>5</p>
        </div>

        <div className="owner-stat-card">
          <h3>Approved Properties</h3>
          <p>3</p>
        </div>

        <div className="owner-stat-card">
          <h3>Pending Properties</h3>
          <p>2</p>
        </div>

        <div className="owner-stat-card">
          <h3>Booking Requests</h3>
          <p>4</p>
        </div>
      </div>

      <div className="owner-actions">
        <h2>Quick Actions</h2>

        <div className="action-buttons">
          <button onClick={() => navigate('/owner/add-property')}>
            Add Property
          </button>

          <button onClick={() => navigate('/owner/my-properties')}>
            My Properties
          </button>

          <button onClick={() => navigate('/owner/booking-requests')}>
            Booking Requests
          </button>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;