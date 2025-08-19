// This is the Header component - it creates the navigation bar that appears on all pages
// It includes the logo, navigation menu, and mobile menu functionality

// Import React and necessary hooks
// useState: Manages component state (data that can change)
// useEffect: Handles side effects (like adding event listeners)
import React, { useState, useEffect } from 'react';

// Import routing hook to detect current page
import { useLocation } from 'react-router-dom';

// Import animation components from Framer Motion
// motion: Creates animated HTML elements
// AnimatePresence: Handles animations when elements appear/disappear
import { motion, AnimatePresence } from 'framer-motion';

// Import icons from react-icons library
// FaBars: Hamburger menu icon for mobile
// FaTimes: X icon to close mobile menu
// FaPhone: Phone icon for contact info
// FaEnvelope: Email icon for contact info
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

// Import the CSS file for this component
import './Header.css';

// Header component function
function Header() {
  // State management using React hooks
  // isScrolled: Tracks if user has scrolled down (for header styling)
  // isMobileMenuOpen: Tracks if mobile menu is open/closed
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current page location for active link highlighting
  const location = useLocation();

  // useEffect hook - runs code when component mounts or when dependencies change
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check if user has scrolled more than 50 pixels
      const scrolled = window.scrollY > 50;
      // Update the isScrolled state
      setIsScrolled(scrolled);
    };

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function - removes event listener when component unmounts
    // This prevents memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once when component mounts

  // Function to toggle mobile menu open/closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Array of navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events & Workshops', path: '/events' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Internship', path: '/internship' },
    { name: 'Enquire Now', path: '/contact', isHighlighted: true }
  ];

  // Return the JSX (HTML-like structure) for the header
  return (
    // Header element with dynamic class based on scroll state
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Container div for centering and max-width */}
      <div className="header-container">
        {/* Logo section - positioned completely to the left */}
        <div className="logo">
          {/* Logo image - replace 'logo.png' with your actual logo file */}
          <img src="/logo.png" alt="EngageHub Logo" />
          {/* Company name */}
        </div>

        {/* Desktop navigation menu - hidden on mobile */}
        <nav className="nav-desktop">
          {/* Map through navigation links to create menu items */}
          {navLinks.map((link) => (
            // Each link is a motion.div for smooth animations
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}  // Slightly enlarge on hover
              whileTap={{ scale: 0.95 }}     // Slightly shrink when clicked
            >
              {/* Navigation link */}
              <a
                href={link.path}
                className={`${(location.pathname === link.path || (link.path === '/events' && location.pathname === '/workshops')) ? 'active' : ''} ${link.isHighlighted ? 'highlighted' : ''}`}
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button - only visible on mobile */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {/* Show hamburger icon when menu is closed, X icon when open */}
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile navigation menu - animated with AnimatePresence */}
        <AnimatePresence>
          {/* Only show mobile menu when isMobileMenuOpen is true */}
          {isMobileMenuOpen && (
            // Motion.div for smooth slide-in animation
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}  // Start invisible and off-screen
              animate={{ opacity: 1, x: 0 }}       // Animate to visible and on-screen
              exit={{ opacity: 0, x: '100%' }}     // Animate out when closing
              transition={{ duration: 0.3 }}        // Animation duration
            >
              {/* Mobile navigation links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`${(location.pathname === link.path || (link.path === '/events' && location.pathname === '/workshops')) ? 'active' : ''} ${link.isHighlighted ? 'highlighted' : ''}`}
                  onClick={closeMobileMenu}  // Close menu when link is clicked
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile contact information */}
              <div className="mobile-contact">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@engagehub.com</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// Export the Header component so it can be used in other files
export default Header; 