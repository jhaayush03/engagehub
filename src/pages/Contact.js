// This is the Contact page component - it contains a contact form and contact information
// It handles form submission, validation, and displays success messages
// NEW: Now includes email integration to send form data to admin email

// Import React and necessary hooks
// useState: Manages component state (form data, submission status)
// useNavigate: Programmatic navigation to other pages
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import EmailJS for sending emails from client-side
// emailjs: Main EmailJS library for sending emails
import emailjs from 'emailjs-com';

// Import animation components from Framer Motion
// motion: Creates animated HTML elements
// useInView: Detects when an element comes into view (for scroll animations)
import { motion, useInView } from 'framer-motion';

// Import icons from react-icons library
// FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock: Contact info icons
// FaUser, FaGraduationCap, FaUserTie: Form field icons
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaUser,
  FaGraduationCap,
  FaUserTie
} from 'react-icons/fa';

// Import the CSS file for this component
import './Contact.css';

// Initialize EmailJS with your user ID
// This is required for EmailJS to work properly
emailjs.init('VOf9Q1CreblzdZh0b');

// Contact component function
function Contact() {
  // Navigation hook for redirecting after form submission
  const navigate = useNavigate();

  // Check if contact section is in view for animations
  const contactRef = React.useRef(null);
  const isInView = useInView(contactRef, { once: true });

  // State management for form data and submission status
  // formData: Stores all the form field values
  // isSubmitting: Tracks if form is currently being submitted
  // submitSuccess: Tracks if form was successfully submitted
  // emailError: Stores any email sending errors
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentClass: '',
    parentName: '',
    parentPhone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Function to handle form field changes
  // Updates the formData state when user types in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to test EmailJS connection
  // This helps debug EmailJS configuration issues
  const testEmailJS = async () => {
    try {
      const SERVICE_ID = 'service_35l4m7w';
      const TEMPLATE_ID = 'template_h2kn4mp';
      const USER_ID = 'VOf9Q1CreblzdZh0b';
      
      const testParams = {
        to_email: 'jhaayush557@gmail.com',
        from_name: 'Test User',
        from_email: 'test@example.com',
        student_name: 'Test Student',
        student_email: 'test@example.com',
        student_phone: '123-456-7890',
        student_class: 'Test Class',
        parent_name: 'Test Parent',
        parent_phone: '123-456-7890',
        address: 'Test Address',
        submission_date: new Date().toLocaleString(),
        message: 'Test email from EngageHub'
      };
      
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, testParams, USER_ID);
      console.log('EmailJS test successful:', response);
      return true;
    } catch (error) {
      console.error('EmailJS test failed:', error);
      return false;
    }
  };

  // Function to send email using EmailJS
  // This function sends the form data to the admin email address
  const sendEmailToAdmin = async (submissionData) => {
    try {
      // EmailJS configuration - you'll need to set these up in EmailJS dashboard
      // SERVICE_ID: Your EmailJS service ID (Gmail, Outlook, etc.)
      // TEMPLATE_ID: Your email template ID
      // USER_ID: Your EmailJS user ID
      const SERVICE_ID = 'service_35l4m7w'; // Replace with your EmailJS service ID
      const TEMPLATE_ID = 'template_h2kn4mp'; // Replace with your EmailJS template ID
      const USER_ID = 'VOf9Q1CreblzdZh0b'; // Replace with your EmailJS user ID

      // Prepare email template parameters
      // These variables will be available in your EmailJS email template
      const templateParams = {
        to_email: 'jhaayush557@gmail.com', // Admin email address
        from_name: submissionData.studentName,
        from_email: submissionData.studentEmail,
        student_name: submissionData.studentName,
        student_email: submissionData.studentEmail,
        student_phone: submissionData.studentPhone,
        student_class: submissionData.studentClass,
        parent_name: submissionData.parentName,
        parent_phone: submissionData.parentPhone,
        address: submissionData.address,
        submission_date: new Date().toLocaleString(),
        message: `New student registration from ${submissionData.studentName}`
      };

      // Send email using EmailJS with timeout
      // This will send the form data to the admin email
      const emailPromise = emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Email request timed out')), 10000); // 10 second timeout
      });
      
      const response = await Promise.race([emailPromise, timeoutPromise]);
      
      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Provide more specific error messages based on the error type
      let errorMessage = 'Failed to send email notification. Please contact us directly.';
      
      if (error.message === 'Email request timed out') {
        errorMessage = 'Email request timed out. Please check your internet connection and try again.';
      } else if (error.text) {
        // EmailJS specific error
        if (error.text.includes('Invalid template')) {
          errorMessage = 'Email template configuration error. Please check template ID.';
        } else if (error.text.includes('Invalid service')) {
          errorMessage = 'Email service configuration error. Please check service ID.';
        } else if (error.text.includes('Invalid user')) {
          errorMessage = 'EmailJS user configuration error. Please check user ID.';
        } else {
          errorMessage = `Email error: ${error.text}`;
        }
      } else if (error.message) {
        // General JavaScript error
        errorMessage = `Error: ${error.message}`;
      }
      
      setEmailError(errorMessage);
      return false;
    }
  };

  // Function to retry email sending
  // This allows users to retry when EmailJS fails
  const retryEmail = async () => {
    setEmailError(''); // Clear previous error
    setIsSubmitting(true);
    
    try {
      const emailSent = await sendEmailToAdmin(formData);
      if (emailSent) {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => {
          navigate('/contact-success');
        }, 2000);
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Retry failed:', error);
      setIsSubmitting(false);
      setEmailError('Retry failed. Please check your EmailJS configuration.');
    }
  };

  // Function to handle form submission
  // Validates form data, sends email, saves to localStorage, and redirects
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Reset any previous errors
    setEmailError('');
    
    // Set submitting state to show loading
    setIsSubmitting(true);
    
    try {
      // Step 1: Send email to admin (NEW FEATURE)
      // This sends the form data to admin email for immediate notification
      const emailSent = await sendEmailToAdmin(formData);
      
      // Step 2: Save submission to localStorage for admin dashboard
      // This allows the admin to view submissions in the web dashboard
      saveSubmissionToStorage(formData);
      
      // Step 3: Only proceed if email was sent successfully
      if (emailSent) {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Redirect to success page after a short delay
        setTimeout(() => {
          navigate('/contact-success');
        }, 2000);
      } else {
        // If email failed, don't redirect and show error
        setIsSubmitting(false);
        // Error message is already set by sendEmailToAdmin function
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setEmailError('An error occurred. Please try again or contact us directly.');
    }
  };

  // Function to save form submission to localStorage
  // This allows the admin dashboard to view submissions
  // NOTE: This data is only stored in the user's browser
  const saveSubmissionToStorage = (submissionData) => {
    // Get existing submissions from localStorage
    const existingSubmissions = localStorage.getItem('contactSubmissions');
    let submissions = [];
    
    if (existingSubmissions) {
      submissions = JSON.parse(existingSubmissions);
    }
    
    // Create new submission object with unique ID and timestamp
    const newSubmission = {
      id: Date.now(), // Use timestamp as unique ID
      timestamp: new Date().toISOString(),
      ...submissionData
    };
    
    // Add new submission to the beginning of the array
    submissions.unshift(newSubmission);
    
    // Save back to localStorage
    // IMPORTANT: This data is only stored in the current browser
    // It will not be available on other devices or after browser data is cleared
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  };

  // Array of contact information items
  // This displays the contact information section on the page
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'info@engagehub.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      value: '123 Education Street, Learning City, LC 12345',
      description: 'Visit our center'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      value: 'Monday - Friday: 8:00 AM - 6:00 PM',
      description: 'Saturday: 9:00 AM - 2:00 PM'
    }
  ];

  // Return the JSX (HTML-like structure) for the contact page
  return (
    <div className="contact-page">
      {/* Contact Header Section */}
      <section className="contact-header">
        <div className="container">
          <motion.div 
            className="contact-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Ready to start your academic journey? Contact us today and let's discuss 
              how we can help you achieve your educational goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section ref={contactRef} className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Information Section */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Contact Information</h2>
              <p className="section-subtitle">
                We're here to help you succeed. Reach out to us through any of these channels.
              </p>
              
              {/* Contact info items */}
              <div className="contact-info-grid">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h3 className="contact-item-title">{item.title}</h3>
                      <p className="contact-item-value">{item.value}</p>
                      <p className="contact-item-description">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title">Send us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {/* Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Student Information Row */}
                <div className="form-row">
                  {/* Student Name Field */}
                  <div className="form-group">
                    <label htmlFor="studentName" className="form-label">
                      <FaUser className="field-icon" />
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter student's full name"
                    />
                  </div>

                  {/* Student Email Field */}
                  <div className="form-group">
                    <label htmlFor="studentEmail" className="form-label">
                      <FaEnvelope className="field-icon" />
                      Student Email *
                    </label>
                    <input
                      type="email"
                      id="studentEmail"
                      name="studentEmail"
                      value={formData.studentEmail}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter student's email address"
                    />
                  </div>
                </div>

                {/* Student Contact Row */}
                <div className="form-row">
                  {/* Student Phone Field */}
                  <div className="form-group">
                    <label htmlFor="studentPhone" className="form-label">
                      <FaPhone className="field-icon" />
                      Student Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="studentPhone"
                      name="studentPhone"
                      value={formData.studentPhone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter student's phone number"
                    />
                  </div>

                  {/* Student Class Field */}
                  <div className="form-group">
                    <label htmlFor="studentClass" className="form-label">
                      <FaGraduationCap className="field-icon" />
                      Class/Grade *
                    </label>
                    <select
                      id="studentClass"
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select class/grade</option>
                      <option value="Elementary">Elementary School</option>
                      <option value="Middle">Middle School</option>
                      <option value="High">High School</option>
                      <option value="College">College/University</option>
                      <option value="Adult">Adult Education</option>
                    </select>
                  </div>
                </div>

                {/* Parent Information Row */}
                <div className="form-row">
                  {/* Parent Name Field */}
                  <div className="form-group">
                    <label htmlFor="parentName" className="form-label">
                      <FaUserTie className="field-icon" />
                      Parent's Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter parent's full name"
                    />
                  </div>

                  {/* Parent Phone Field */}
                  <div className="form-group">
                    <label htmlFor="parentPhone" className="form-label">
                      <FaPhone className="field-icon" />
                      Parent's Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter parent's phone number"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="form-group full-width">
                  <label htmlFor="address" className="form-label">
                    <FaMapMarkerAlt className="field-icon" />
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your full address"
                    rows="3"
                  ></textarea>
                </div>

                {/* Error Message Display */}
                {emailError && (
                  <motion.div 
                    className="error-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>⚠️ {emailError}</p>
                    <p>Please check your EmailJS configuration and try again.</p>
                    <p>Your form data was saved locally but email notification failed.</p>
                    
                    {/* Retry Button */}
                    <motion.button
                      type="button"
                      className="retry-btn"
                      onClick={retryEmail}
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Retrying...' : '🔄 Retry Email'}
                    </motion.button>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitSuccess && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>✅ Thank you! Your message has been sent successfully.</p>
                    <p>📧 An email notification has been sent to our admin team.</p>
                    <p>⏰ We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Export the Contact component so it can be used in other files
export default Contact; 