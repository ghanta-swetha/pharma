import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Close menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/where-we-are', label: 'Where We Are' },
    { to: '/products', label: 'Products' },
    { to: '/enquiry', label: 'Online Enquiry' },
    { to: '/news', label: 'News/Events' },
    { to: '/contact', label: 'Contact Us' },
  ];

  // Active state logic
  const getActiveClass = ({ isActive, path }) => {
    // For Home, require exact match
    if (path === '/') {
      return isActive && location.pathname === '/'
        ? 'text-green-700 underline underline-offset-4 font-bold lg:text-[18px]'
        : 'text-gray-800 hover:text-green-700 font-bold lg:text-[16px]';
    }
    // For other routes, use startsWith to handle query params
    return location.pathname.startsWith(path)
      ? 'text-green-700 underline underline-offset-4 font-bold lg:text-[18px]'
      : 'text-gray-800 hover:text-green-700 font-bold lg:text-[16px]';
  };

  return (
    <header className="bg-white shadow-md py-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/assets/Header/logo.png" alt="Spansules Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Hamburger button for mobile */}
        <button
          className={`lg:hidden focus:outline-none ${isMenuOpen ? 'hidden' : 'block'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src="/assets/Header/tabler_menu-4.png" alt="Menu" className="w-6 h-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => getActiveClass({ isActive, path: item.to })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile/Tablet Slide Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-green-700 z-40 py-6 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end px-6">
          <button className="text-white focus:outline-none" onClick={closeMenu} aria-label="Close menu">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-6 mt-4">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive && (item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to))
                      ? 'block text-white text-lg font-semibold'
                      : 'block text-white text-lg'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-6"></li>
          </ul>
        </nav>
      </div>

      {/* Clickable overlay to close menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={closeMenu} />
      )}
    </header>
  );
};

export default Header;