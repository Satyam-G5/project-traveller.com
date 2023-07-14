import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../download2.png';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { newuser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-20 bg-white fixed top-0 flex justify-between rounded-lg shadow-lg z-10">
      <div className="rounded-lg">
        <img className="p-2 w-50 h-20 object-cover" src={Image} alt="Logo" />
      </div>
      <div className="flex flex-row justify-end items-center mt-1 mr-2 md:hidden">
        <button
          className="text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 focus:outline-none"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
      <div className={`hidden md:flex md:flex-row md:justify-evenly md:mt-1 md:mr-2 ${menuOpen ? 'md:hidden' : ''}`}>
        <Link to="/" className="text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950">
          Home
        </Link>
        <Link to="/hotels" className="text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950">
          Hotels
        </Link>
        <Link to="/guides" className="text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950">
          Guide
        </Link>
        <Link to="/top-destination" className="text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950">
          Trending
        </Link>
      </div>
      {menuOpen && (
        <div className="absolute top-20 right-0 bg-white w-full md:hidden">
          <Link
            to="/"
            className="block text-xl text-gray-600 p-6 border-b hover:cursor-pointer hover:text-gray-950"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/hotels"
            className="block text-xl text-gray-600 p-6 border-b hover:cursor-pointer hover:text-gray-950"
            onClick={toggleMenu}
          >
            Hotels
          </Link>
          <Link
            to="/guides"
            className="block text-xl text-gray-600 p-6 border-b hover:cursor-pointer hover:text-gray-950"
            onClick={toggleMenu}
          >
            Guide
          </Link>
          <Link
            to="/top-destination"
            className="block text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950"
            onClick={toggleMenu}
          >
            Trending
          </Link>
        </div>
      )}
      <div className="mt-3.5 mr-2 justify-center">
        <div className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 shadow-lg hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105">
          {newuser ? (
            <Link className="text-xl text-slate-700 w-1/6 h-8" to="/user_profile">
              {newuser.Name}
            </Link>
          ) : (
            <Link className="text-xl text-slate-700 w-1/6 h-8" to="/User_login">
            Account
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
