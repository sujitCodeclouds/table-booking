import React from "react";

const InfoPage = () => {
  const bookings = JSON.parse(localStorage.getItem("bookingInfo")) || [];

  if (bookings.length === 0) {
    return <p className="text-center mt-8">No booking information found.</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Booking Information</h1>
      <div className="mt-4">
        {bookings.map((booking, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.phone}
            </p>
            <p>
              <strong>Restaurant:</strong> {booking.restaurant}
            </p>
            <p>
              <strong>Table:</strong> {booking.table}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;
