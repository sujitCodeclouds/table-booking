import React from "react";

const InfoPage = () => {
  const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

  if (!bookingInfo) {
    return <p className="text-center mt-8">No booking information found.</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Booking Information</h1>
      <p className="mt-4">Name: {bookingInfo.name}</p>
      <p>Email: {bookingInfo.email}</p>
      <p>Phone: {bookingInfo.phone}</p>
      <p>Restaurant: {bookingInfo.restaurant}</p>
      <p>Table: {bookingInfo.table}</p>
    </div>
  );
};

export default InfoPage;
