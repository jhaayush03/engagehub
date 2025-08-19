// This is the Internship page component - displays internship opportunities and information

// Import React and necessary hooks
import React from 'react';

// Import animation components from Framer Motion
import { motion, useInView } from 'framer-motion';

// Import icons from react-icons library
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';

// Import the CSS file for this component
import './Internship.css';

// Internship component function
function Internship() {
  // Check if different sections are in view for animations
  const heroRef = React.useRef(null);
  const opportunitiesRef = React.useRef(null);
  const benefitsRef = React.useRef(null);
  const applicationRef = React.useRef(null);

  // useInView hooks to detect when sections come into view
  const isHeroInView = useInView(heroRef, { once: true });
  const isOpportunitiesInView = useInView(opportunitiesRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isApplicationInView = useInView(applicationRef, { once: true });

  // Array of internship opportunities
  const opportunities = [
    {
      title: 'Academic Support Intern',
      department: 'Education',
      duration: '3-6 months',
      location: 'Remote/Hybrid',
      description: 'Assist in developing educational content and supporting student learning programs.',
      requirements: ['Currently enrolled in Education or related field', 'Strong communication skills', 'Passion for teaching']
    },
    {
      title: 'Marketing & Outreach Intern',
      department: 'Marketing',
      duration: '3-6 months',
      location: 'Remote/Hybrid',
      description: 'Help create marketing campaigns and manage social media presence.',
      requirements: ['Marketing, Communications, or related field', 'Social media experience', 'Creative mindset']
    },
    {
      title: 'Technology & Development Intern',
      department: 'IT',
      duration: '3-6 months',
      location: 'Remote/Hybrid',
      description: 'Support website development and technology infrastructure.',
      requirements: ['Computer Science or related field', 'Web development skills', 'Problem-solving abilities']
    }
  ];

  // Array of internship benefits
  const benefits = [
    {
      icon: <FaGraduationCap />,
      title: 'Hands-on Experience',
      description: 'Gain real-world experience in your field of study with practical projects and responsibilities.'
    },
    {
      icon: <FaUsers />,
      title: 'Mentorship',
      description: 'Work closely with experienced professionals who will guide and mentor you throughout your internship.'
    },
    {
      icon: <FaChartLine />,
      title: 'Skill Development',
      description: 'Develop essential skills like communication, teamwork, and problem-solving in a professional environment.'
    },
    {
      icon: <FaAward />,
      title: 'Networking',
      description: 'Build valuable connections with industry professionals and fellow interns.'
    }
  ];

  // Return the JSX (HTML-like structure) for the internship page
  return (
    <div className="internship-page">
      {/* Hero Section */}
      <section ref={heroRef} className="internship-hero section">
        <div className="container">
          <motion.div 
            className="internship-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">Internship Opportunities</h1>
            <p className="section-subtitle">
              Join our team and gain valuable experience while contributing to our mission of empowering students through quality education.
            </p>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section ref={opportunitiesRef} className="opportunities section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isOpportunitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Available Positions</h2>
            <p className="section-subtitle">
              Explore our current internship opportunities and find the perfect fit for your skills and interests.
            </p>
          </motion.div>

          <div className="opportunities-grid">
            {opportunities.map((opportunity, index) => (
              <motion.div 
                key={opportunity.title}
                className="opportunity-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isOpportunitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="opportunity-header">
                  <h3 className="opportunity-title">{opportunity.title}</h3>
                  <span className="opportunity-department">{opportunity.department}</span>
                </div>
                
                <div className="opportunity-details">
                  <div className="detail-item">
                    <FaCalendarAlt className="detail-icon" />
                    <span>{opportunity.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{opportunity.location}</span>
                  </div>
                </div>
                
                <p className="opportunity-description">{opportunity.description}</p>
                
                <div className="opportunity-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {opportunity.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <motion.button 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for this Position
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="benefits section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Intern with Us?</h2>
            <p className="section-subtitle">
              Discover the benefits of interning at EngageHub and how it can accelerate your career growth.
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section ref={applicationRef} className="application section">
        <div className="container">
          <motion.div 
            className="application-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isApplicationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Ready to Apply?</h2>
            <p className="section-subtitle">
              Take the first step towards your professional development. Submit your application today!
            </p>
            <div className="application-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Submit Application</h3>
                <p>Fill out our online application form with your details and resume.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Interview Process</h3>
                <p>Participate in interviews to discuss your interests and goals.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Start Your Journey</h3>
                <p>Begin your internship and start gaining valuable experience.</p>
              </div>
            </div>
            <motion.button 
              className="btn btn-primary application-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Application Process
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Export the Internship component so it can be used in other files
export default Internship;
