import './MyBookings.css';

interface Booking {
  id: number;
  propertyName: string;
  location: string;
  rent: number;
  bookingDate: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

const bookings: Booking[] = [
  {
    id: 1,
    propertyName: 'Sunshine PG',
    location: 'Rajpura, Punjab',
    rent: 6500,
    bookingDate: '20 Nov 2026',
    status: 'Confirmed',
  },
  {
    id: 2,
    propertyName: 'Royal Residency',
    location: 'Chandigarh',
    rent: 8500,
    bookingDate: '22 Nov 2026',
    status: 'Pending',
  },
  {
    id: 3,
    propertyName: 'Green Valley Flat',
    location: 'Patiala, Punjab',
    rent: 10000,
    bookingDate: '24 Nov 2026',
    status: 'Cancelled',
  },
];

function MyBookings() {
  const confirmed = bookings.filter(
    (booking) => booking.status === 'Confirmed'
  ).length;

  const pending = bookings.filter(
    (booking) => booking.status === 'Pending'
  ).length;

  const cancelled = bookings.filter(
    (booking) => booking.status === 'Cancelled'
  ).length;

  return (
    <div className="bookings-page">
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <p>Manage and track all your property bookings.</p>
      </div>

      <div className="booking-stats">
        <div className="booking-stat-card">
          <h3>Total Bookings</h3>
          <p>{bookings.length}</p>
        </div>

        <div className="booking-stat-card">
          <h3>Confirmed</h3>
          <p>{confirmed}</p>
        </div>

        <div className="booking-stat-card">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>

        <div className="booking-stat-card">
          <h3>Cancelled</h3>
          <p>{cancelled}</p>
        </div>
      </div>

      <div className="bookings-list">
        <h2>Booking History</h2>

        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <div className="booking-info">
              <h3>{booking.propertyName}</h3>
              <p>{booking.location}</p>
              <p>
                <strong>Monthly Rent:</strong> ₹{booking.rent}
              </p>
              <p>
                <strong>Booking Date:</strong> {booking.bookingDate}
              </p>
            </div>

            <div className="booking-actions">
              <span
                className={`booking-status ${booking.status.toLowerCase()}`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;