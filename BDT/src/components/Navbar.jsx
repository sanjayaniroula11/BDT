import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav class="w-full bg-[#D32F2F] flex justify-between p-4">
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/donateblood'>DonateBlood</Link>
    </nav>
  );
}

export default Navbar;
