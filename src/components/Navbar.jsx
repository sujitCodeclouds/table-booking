import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Table Reservation System
        </Link>
        <Link to="/info" className="text-lg">
          Info Page
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
