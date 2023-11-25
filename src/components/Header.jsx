import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);


  return (
    <nav className="navbar w-full h-[5rem] px-4 flex justify-between items-center shadow-sm shadow-green-600 relative">
      <Link to="/">
        <span className="logo text-5xl font-bold text-black">HT<span className="text-5xl font-bold text-green-500">Q</span></span>
      </Link>
      <ul className="navbar-list hidden gap-6 text-xl md:flex md:items-center">
          <Link to="/about-us" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Über Uns</Link>
          <Link to="/services" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Unser Service</Link>
          <Link to="/cooperation" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Kooperation</Link>
          <Link to="/contact" className="py-2 px-4 bg-green-500 hover:bg-green-600 transition text-green-50 rounded">Kontakt</Link>
        </ul>
      <button className="dropdown-btn md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src="./close-icon.svg" alt="Close Menu" className="close-menu" />
        ) : (
          <img src="/burger-icon.svg" alt="Burger Menu" className="burger-menu" />
        )}
      </button>
      {isMenuOpen && (
        <div className="dropdown-menu flex flex-col items-center justify-evenly bg-green-500 border border-green-700 rounded shadow-sm shadow-green-700 mx-auto py-2 w-3/4 h-[40rem] absolute z-50 top-24 right-0 left-0 ">
          <Link onClick={toggleMenu} to="/" className="py-5 w-3/4 bg-green-700 hover:bg-green-800 rounded text-green-50 text-xl text-center">Home</Link>
          <Link onClick={toggleMenu} to="/about-us" className="py-5 w-3/4 bg-green-700 hover:bg-green-800 rounded text-green-50 text-xl text-center">Über Uns</Link>
          <Link onClick={toggleMenu} to="/services" className="py-5 w-3/4 bg-green-700 hover:bg-green-800 rounded text-green-50 text-xl text-center">Unser Service</Link>
          <Link onClick={toggleMenu} to="/cooperation" className="py-5 w-3/4 bg-green-700 hover:bg-green-800 rounded text-green-50 text-xl text-center">Kooperation</Link>
          <Link onClick={toggleMenu} to="/contact" className="py-5 w-3/4 bg-green-700 hover:bg-green-800 rounded text-green-50 text-xl text-center">Kontakt</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
