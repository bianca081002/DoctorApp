import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const NavBar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData, handleLogout } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    handleLogout();
    setShowMenu(false); // Close the mobile menu after logging out
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img
        className="w-36 cursor-pointer"
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate('/')}
      />
      {/* Desktop Navigation */}
      <ul className="md:flex items-center gap-5 font-medium hidden">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
          Home
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
          Doctors
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
          Contact
        </NavLink>
        {token && userData ? (
          <>
            <NavLink to="/my-profile" className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
              My Profile
            </NavLink>
            <NavLink to="/my-appointments" className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
              My Appointments
            </NavLink>
            <li className="cursor-pointer hover:text-red-600" onClick={logout}>
              Logout
            </li>
          </>
        ) : (
          <li
            className="cursor-pointer hover:text-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </li>
        )}
      </ul>
      {/* Hamburger Menu for Mobile */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6 md:hidden cursor-pointer"
        src={assets.menu_icon}
        alt="Menu"
      />
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-20 transform transition-transform ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img src={assets.logo} className="w-36" alt="Logo" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className="w-7 cursor-pointer"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-5 px-5 text-lg font-medium">
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            className="hover:text-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/doctors"
            onClick={() => setShowMenu(false)}
            className="hover:text-primary"
          >
            Doctors
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowMenu(false)}
            className="hover:text-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="hover:text-primary"
          >
            Contact
          </NavLink>
          {token && userData ? (
            <>
              <NavLink
                to="/my-profile"
                onClick={() => setShowMenu(false)}
                className="hover:text-primary"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/my-appointments"
                onClick={() => setShowMenu(false)}
                className="hover:text-primary"
              >
                My Appointments
              </NavLink>
              <li
                className="cursor-pointer hover:text-red-600"
                onClick={logout}
              >
                Logout
              </li>
            </>
          ) : (
            <li
              className="cursor-pointer hover:text-primary"
              onClick={() => {
                setShowMenu(false);
                navigate('/login');
              }}
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
