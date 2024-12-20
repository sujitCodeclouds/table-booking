import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "../data/restaurants";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id.toString() === id);
  //console.log(restaurant);
  const [selectedTable, setSelectedTable] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTableClick = (table) => {
    setSelectedTable(table);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const bookingData = {
        ...formData,
        table: selectedTable,
        restaurant: restaurant.name,
      };
      localStorage.setItem("bookingInfo", JSON.stringify(bookingData));
      navigate("/info");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
      <p className="text-gray-500">{restaurant.location}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Available Tables</h2>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: restaurant.tables }).map((_, index) => (
          <button
            key={index}
            className={`p-4 rounded ${
              selectedTable === index + 1 ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => handleTableClick(index + 1)}
          >
            Table {index + 1}
          </button>
        ))}
      </div>

      {selectedTable && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default RestaurantDetails;
