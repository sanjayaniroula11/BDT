import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#D32F2F] flex items-center justify-between py-4 px-10">
      <div>
        <h1 className='text-2xl font-bold text-white shadow-2xl'>RAGAT</h1>
      </div>
      <div className='flex justify-between space-x-5'>
        <Link className="hover:text-gray-300 font-bold mb-2" to="/">Home</Link>
        <Link className="hover:text-gray-300 font-bold mb-2" to="/about">About</Link>
        <Link className="hover:text-gray-300 font-bold mb-2" to="/login">Login</Link>
        <Link className="hover:text-gray-300 font-bold mb-2" to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
