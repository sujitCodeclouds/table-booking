import React from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold">{restaurant.name}</h3>
            <p className="text-gray-500">{restaurant.location}</p>
            <Link
              to={`/restaurant/${restaurant.id}`}
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
