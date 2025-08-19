import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle, FaNewspaper, FaBell } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="newsletter-page">
      <section className="newsletter-hero section">
        <div className="container">
          <motion.div 
            className="newsletter-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Stay Updated</h1>
            <p className="section-subtitle">
              Subscribe to our newsletter for the latest educational insights, tips, and updates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="newsletter-content section">
        <div className="container">
          <div className="newsletter-container">
            <motion.div 
              className="newsletter-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="newsletter-icon">
                <FaNewspaper />
              </div>
              <h2>Join Our Newsletter</h2>
              <p>
                Get exclusive access to educational resources, study tips, upcoming events, and success stories 
                delivered directly to your inbox. Stay informed about the latest trends in education and 
                opportunities for academic growth.
              </p>
              
              <div className="newsletter-benefits">
                <h3>What you'll receive:</h3>
                <ul>
                  <li>Weekly study tips and strategies</li>
                  <li>Updates on upcoming workshops and events</li>
                  <li>Success stories from our students</li>
                  <li>Educational resources and guides</li>
                  <li>Early access to new programs</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="newsletter-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="form-card card">
                {isSubscribed ? (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCheckCircle />
                    <h3>Successfully Subscribed!</h3>
                    <p>Thank you for subscribing to our newsletter. You'll receive our first email shortly.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="form-header">
                      <div className="form-icon">
                        <FaBell />
                      </div>
                      <h3>Subscribe Now</h3>
                      <p>Join our community of learners and stay updated with the latest educational content.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="newsletter-form">
                      <div className="form-group">
                        <label htmlFor="email">
                          <FaEnvelope />
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="btn btn-primary subscribe-btn"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="spinner"></div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <FaEnvelope />
                            Subscribe to Newsletter
                          </>
                        )}
                      </motion.button>
                    </form>
                    
                    <p className="form-note">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter; 