import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHome, FaArrowLeft } from 'react-icons/fa';
import './ContactSuccess.css';

const ContactSuccess = () => {
  return (
    <div className="contact-success-page">
      <div className="container">
        <motion.div 
          className="success-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="success-icon">
            <FaCheckCircle />
          </div>
          
          <h1>Thank You!</h1>
          <h2>Your Application Has Been Submitted Successfully</h2>
          
          <p>
            We have received your student registration form and will review it carefully. 
            Our team will contact you within 24-48 hours to discuss the next steps and 
            answer any questions you may have.
          </p>
          
          <div className="next-steps">
            <h3>What happens next?</h3>
            <ul>
              <li>We'll review your application and contact you within 24-48 hours</li>
              <li>Schedule a consultation to discuss your educational goals</li>
              <li>Create a personalized learning plan tailored to your needs</li>
              <li>Begin your journey towards academic excellence</li>
            </ul>
          </div>
          
          <div className="success-actions">
            <Link to="/" className="btn btn-primary">
              <FaHome />
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <FaArrowLeft />
              Submit Another Application
            </Link>
          </div>
          
          <div className="contact-reminder">
            <p>
              <strong>Need immediate assistance?</strong><br />
              Call us at <a href="tel:+1234567890">+1 (234) 567-890</a> or 
              email us at <a href="mailto:info@engagehub.com">info@engagehub.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSuccess; 