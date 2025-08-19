// This is the Home page component - the main landing page of the website
// It includes a hero section, features, statistics, testimonials, and call-to-action sections

// Import React and necessary hooks
import React from 'react';

// Import animation components from Framer Motion
// motion: Creates animated HTML elements
// useInView: Detects when an element comes into view (for scroll animations)
import { motion, useInView } from 'framer-motion';

// Import icons from react-icons library
// FaGraduationCap, FaUsers, FaChartLine, FaAward: Feature icons
// FaStar: Star icon for ratings
// FaQuoteLeft: Quote icon for testimonials
// FaArrowRight: Arrow icon for buttons
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaAward,
  FaStar,
  FaQuoteLeft,
  FaArrowRight
} from 'react-icons/fa';

// Import the CSS file for this component
import './Home.css';

// Home component function
function Home() {
  // Check if different sections are in view for animations
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const ctaRef = React.useRef(null);

  // useInView hooks to detect when sections come into view
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  // Array of features to display
  const features = [
    {
      icon: <FaGraduationCap />,
      title: 'Expert Tutoring',
      description: 'Personalized learning with certified educators and subject matter experts.'
    },
    {
      icon: <FaUsers />,
      title: 'Small Group Classes',
      description: 'Interactive learning in small groups for better engagement and support.'
    },
    {
      icon: <FaChartLine />,
      title: 'Progress Tracking',
      description: 'Monitor academic progress with detailed reports and analytics.'
    },
    {
      icon: <FaAward />,
      title: 'Proven Results',
      description: 'Consistent improvement in grades and test scores for our students.'
    }
  ];

  // Array of statistics to display
  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Tutors' },
    { number: '1000+', label: 'Hours of Learning' }
  ];

  // Array of testimonials to display
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      rating: 5,
      text: 'EngageHub has transformed my daughter\'s academic performance. The personalized approach and dedicated tutors have made all the difference.'
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      rating: 5,
      text: 'The small group classes are amazing! I\'ve improved my grades significantly and gained confidence in my studies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Parent',
      rating: 5,
      text: 'Excellent service and results. My son went from struggling to excelling in just a few months.'
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className="star" />
    ));
  };

  // Return the JSX (HTML-like structure) for the home page
  return (
    <div className="home">
      {/* Hero Section - Main banner area */}
      <section ref={heroRef} className="hero">
        <div className="hero-background">
          <img src="./banner.avif" alt="Hero Background" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          {/* Hero content with animations - centered */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading */}
            <h1 className="hero-title">
              Empowering Students Through
              <span className="highlight"> Quality Education</span>
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle">
              Transform your academic journey with personalized tutoring, expert guidance, 
              and proven learning strategies designed for your success.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="hero-buttons">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="./contact">Get Started Today</a>
                <FaArrowRight />
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - What we offer */}
      <section ref={featuresRef} className="features section">
        <div className="container">
          {/* Section header */}
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose EngageHub?</h2>
            <p className="section-subtitle">
              We provide comprehensive educational services designed to help students 
              achieve their academic goals and unlock their full potential.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Numbers and achievements */}
      <section ref={statsRef} className="stats section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Student and parent reviews */}
      <section ref={testimonialsRef} className="testimonials section">
        <div className="container">
          {/* Section header */}
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What Our Students & Parents Say</h2>
            <p className="section-subtitle">
              Real stories from real people who have experienced the EngageHub difference.
            </p>
          </motion.div>

          {/* Testimonials grid */}
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Final encouragement to act */}
      <section ref={ctaRef} className="cta section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Transform Your Academic Journey?</h2>
            <p className="cta-subtitle">
              Join hundreds of successful students who have achieved their goals with EngageHub.
            </p>
            <motion.button 
              className="btn btn-primary cta-button"
             
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="./contact">Start Your Success Story</a>
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Export the Home component so it can be used in other files
export default Home; 