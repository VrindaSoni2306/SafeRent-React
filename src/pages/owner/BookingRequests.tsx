import { useState } from 'react';
import './BookingRequests.css';

interface Booking {
  id: number;
  propertyName: string;
  userName: string;
  bookingDate: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
}

function BookingRequests() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      propertyName: 'Sunrise PG',
      userName: 'Rahul Sharma',
      bookingDate: '25 November 2026',
      status: 'Pending',
    },
    {
      id: 2,
      propertyName: 'Green Stay',
      userName: 'Priya Verma',
      bookingDate: '26 November 2026',
      status: 'Pending',
    },
    {
      id: 3,
      propertyName: 'City View Rooms',
      userName: 'Aman Singh',
      bookingDate: '20 November 2026',
      status: 'Accepted',
    },
  ]);

  const handleBooking = (
    id: number,
    newStatus: 'Accepted' | 'Rejected'
  ) => {
    setBookings((previousBookings) =>
      previousBookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: newStatus }
          : booking
      )
    );
  };

  return (
    <div className="booking-requests page-container">
      <div className="booking-header">
        <h1>Booking Requests</h1>
        <p>Manage booking requests received for your properties.</p>
      </div>

      <div className="booking-list">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <div className="booking-info">
              <h2>{booking.propertyName}</h2>

              <p>
                <strong>User Name:</strong> {booking.userName}
              </p>

              <p>
                <strong>Booking Date:</strong> {booking.bookingDate}
              </p>

              <p>
                <strong>Status:</strong>{' '}
                <span className={`booking-status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </p>
            </div>

            {booking.status === 'Pending' && (
              <div className="booking-actions">
                <button
                  className="accept-btn"
                  onClick={() => handleBooking(booking.id, 'Accepted')}
                >
                  Accept
                </button>

                <button
                  className="reject-btn"
                  onClick={() => handleBooking(booking.id, 'Rejected')}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}

        {bookings.length === 0 && (
          <p className="no-bookings">No booking requests available.</p>
        )}
      </div>
    </div>
  );
}

export default BookingRequests;