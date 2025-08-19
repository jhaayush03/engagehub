// This is the Footer component - it creates the footer that appears at the bottom of every page
// It includes company information, quick links, services, contact details, and a scroll-to-top button

// Import React and necessary hooks
// useState: Manages component state (data that can change)
import React, { useState } from 'react';

// Import animation components from Framer Motion
// motion: Creates animated HTML elements
// useInView: Detects when an element comes into view (for scroll animations)
// AnimatePresence: Handles animations when elements appear/disappear
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Import icons from react-icons library
// FaFacebook, FaTwitter, FaInstagram, FaLinkedin: Social media icons
// FaPhone, FaEnvelope, FaMapMarkerAlt: Contact icons
// FaArrowUp: Scroll to top icon
// FaGraduationCap, FaUsers, FaCalendar, FaBook: Service icons
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaGraduationCap,
  FaUsers,
  FaCalendar,
  FaBook
} from 'react-icons/fa';

// Import the CSS file for this component
import './Footer.css';

// Footer component function
function Footer() {
  // State for scroll-to-top button visibility
  // isScrollVisible: Tracks if user has scrolled enough to show the button
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  // Check if footer is in view for animations
  const footerRef = React.useRef(null);
  const isInView = useInView(footerRef, { once: true });

  // Function to handle scroll events and show/hide scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls more than 300 pixels
      const scrolled = window.scrollY > 300;
      setIsScrollVisible(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  // Array of quick links for the footer
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];

  // Array of services for the footer
  const services = [
    { name: 'Academic Tutoring', icon: <FaGraduationCap /> },
    { name: 'Test Preparation', icon: <FaBook /> },
    { name: 'Career Counseling', icon: <FaUsers /> },
    { name: 'Workshop Programs', icon: <FaCalendar /> }
  ];

  // Array of social media links
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' }
  ];

  // Return the JSX (HTML-like structure) for the footer
  return (
    // Footer element with ref for scroll detection
    <footer ref={footerRef} className="footer">
      {/* Main footer content container */}
      <div className="footer-container">
        {/* Company information section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Company logo and description */}
          <div className="company-info">
            {/* Logo and company name */}
            <div className="footer-logo">
              <img src="/logo.png" alt="EngageHub Logo" />
            </div>
            
            {/* Company description */}
            <p className="company-description">
              Empowering students through quality education and comprehensive learning experiences. 
              We are committed to academic excellence and personal growth.
            </p>
            
            {/* Social media links */}
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}  // Slightly enlarge on hover
                  whileTap={{ scale: 0.9 }}     // Slightly shrink when clicked
                  className="social-link"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick links section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Our Services</h3>
          <div className="footer-info">
            {/* Phone number */}
            <div className="footer-item">
              <FaGraduationCap className="graduationcap" />
              <div>
                <span className="contact-label">Academic tutoring</span> 
              </div>
            </div>

            <div className="footer-item">
              <FaBook className="book" />
              <div>
                <span className="contact-label">Test Preparation</span> 
              </div>
            </div>

            <div className="footer-item">
              <FaUsers className="fauser" />
              <div>
                <span className="contact-label">Career Counseling</span> 
              </div>
            </div>

            <div className="footer-item">
              <FaCalendar className="calendar" />
              <div>
                <span className="contact-label">Workshop Programs</span> 
              </div>
            </div>

          </div>
        </motion.div>

        {/* Contact information section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Contact Info</h3>
          <div className="contact-info">
            {/* Phone number */}
            <div className="contact-item">
              <FaPhone className="contact-icon-phone" />
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 (555) 123-4567</span>
              </div>
            </div>
            
            {/* Email address */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon-email" />
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">info@engagehub.com</span>
              </div>
            </div>
            
            {/* Address */}
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon-address" />
              <div>
                <span className="contact-label">Address</span>
                <span className="contact-value">
                  123 Education Street<br />
                  Learning City, LC 12345
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar with copyright and scroll-to-top button */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          {/* Copyright information */}
          <div className="copyright">
            <p>&copy; 2024 EngageHub. All rights reserved.</p>
          </div>
          
          {/* Scroll to top button - only visible when scrolled */}
          <AnimatePresence>
            {isScrollVisible && (
              <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowUp />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}

// Export the Footer component so it can be used in other files
export default Footer; 