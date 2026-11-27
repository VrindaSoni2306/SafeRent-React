import './MyBookings.css';

interface Booking {
  id: number;
  property: string;
  location: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  price: string;
}

const bookings: Booking[] = [
  {
    id: 1,
    property: 'Modern 2BHK Apartment',
    location: 'Chandigarh, Punjab',
    date: '15 November 2026',
    status: 'Confirmed',
    price: '₹15,000/month',
  },
  {
    id: 2,
    property: 'Cozy Studio Apartment',
    location: 'Rajpura, Punjab',
    date: '20 November 2026',
    status: 'Pending',
    price: '₹8,000/month',
  },
  {
    id: 3,
    property: 'Luxury 3BHK Flat',
    location: 'Mohali, Punjab',
    date: '05 October 2026',
    status: 'Cancelled',
    price: '₹22,000/month',
  },
];

function MyBookings() {
  return (
    <div className="my-bookings-page">
      <div className="bookings-heading">
        <h1>My Bookings</h1>
        <p>View and manage all your property bookings.</p>
      </div>

      <div className="booking-list">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <div className="booking-info">
              <h2>{booking.property}</h2>
              <p>{booking.location}</p>
              <p>Booking Date: {booking.date}</p>
              <h3>{booking.price}</h3>
            </div>

            <div className="booking-actions">
              <span
                className={`booking-status ${booking.status.toLowerCase()}`}
              >
                {booking.status}
              </span>

              <button
                className="booking-details-btn"
                onClick={() => alert(`Booking ID: ${booking.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;