
import './UserDashboard.css';

function UserDashboard() {
  const userName = 'Vanshdeep';

  return (
    <div className="user-dashboard">

      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <div>
          <p className="welcome-label">USER DASHBOARD</p>
          <h1>Welcome back, {userName}! 👋</h1>
          <p>Manage your bookings and find your perfect place with SafeRent.</p>
        </div>

        <div className="welcome-icon">
          🏠
        </div>
      </section>

      {/* Dashboard Statistics */}
      <section className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon pink-icon">🏠</div>
          <div>
            <h3>Total Bookings</h3>
            <h2>05</h2>
            <p>All your bookings</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple-icon">⏳</div>
          <div>
            <h3>Pending Bookings</h3>
            <h2>02</h2>
            <p>Waiting for approval</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green-icon">✓</div>
          <div>
            <h3>Confirmed Bookings</h3>
            <h2>03</h2>
            <p>Successfully approved</p>
          </div>
        </div>

      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="action-container">

          <a href="/properties" className="action-card">
            <span>🔍</span>
            <div>
              <h3>Explore Properties</h3>
              <p>Find your perfect rental home.</p>
            </div>
          </a>

          <a href="/user/bookings" className="action-card">
            <span>📋</span>
            <div>
              <h3>My Bookings</h3>
              <p>Check your booking status.</p>
            </div>
          </a>

          <a href="/user/profile" className="action-card">
            <span>👤</span>
            <div>
              <h3>My Profile</h3>
              <p>View and update your details.</p>
            </div>
          </a>

        </div>
      </section>

      {/* Recent Bookings */}
      <section className="recent-bookings">

        <div className="section-heading">
          <h2>Recent Bookings</h2>
          <a href="/user/bookings">View All →</a>
        </div>

        <div className="booking-table">

          <div className="booking-row booking-header">
            <span>Property</span>
            <span>Booking Date</span>
            <span>Monthly Rent</span>
            <span>Status</span>
          </div>

          <div className="booking-row">
            <span>Sunshine PG</span>
            <span>20 Nov 2026</span>
            <span>₹6,000</span>
            <span className="status confirmed">Confirmed</span>
          </div>

          <div className="booking-row">
            <span>Royal Residency</span>
            <span>22 Nov 2026</span>
            <span>₹8,500</span>
            <span className="status pending">Pending</span>
          </div>

          <div className="booking-row">
            <span>Green Valley Flat</span>
            <span>24 Nov 2026</span>
            <span>₹12,000</span>
            <span className="status confirmed">Confirmed</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default UserDashboard;