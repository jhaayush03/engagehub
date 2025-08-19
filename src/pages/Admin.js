// This is the Admin page component - a password-protected dashboard for managing the website
// It includes login functionality and a dashboard to view submitted contact forms
// NEW: Now works with email notifications - admin receives emails when forms are submitted

// Import React and necessary hooks
// useState: Manages component state (login status, form data, etc.)
// useEffect: Handles side effects like checking authentication
import React, { useState, useEffect } from 'react';

// Import animation components from Framer Motion
// motion: Creates animated HTML elements
import { motion } from 'framer-motion';

// Import icons from react-icons library
// FaLock, FaUser, FaEye, FaEyeSlash: Login form icons
// FaUsers, FaEnvelope, FaPhone, FaMapMarkerAlt: Contact info icons
// FaSignOutAlt, FaTrash, FaEye: Dashboard action icons
import { 
  FaLock, 
  FaUser, 
  FaEye, 
  FaEyeSlash,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaTrash,
  FaEye as FaView
} from 'react-icons/fa';

// Import the CSS file for this component
import './Admin.css';

// Admin component function
function Admin() {
  // State management for admin functionality
  // isLoggedIn: Tracks if user is authenticated (persists in localStorage)
  // showPassword: Controls password visibility toggle
  // username: Stores entered username for login form
  // password: Stores entered password for login form
  // submissions: Stores contact form submissions from localStorage
  // selectedSubmission: Currently selected submission for detailed view modal
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Check if user is already logged in on component mount
  // This ensures admin stays logged in even after page refresh
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsLoggedIn(true);
      loadSubmissions();
    }
  }, []);

  // Function to load contact form submissions
  // This loads data from localStorage where contact forms are saved
  // In a real production app, this would fetch from a database
  const loadSubmissions = () => {
    // Get stored submissions from localStorage
    // localStorage is browser-specific storage that persists between sessions
    const storedSubmissions = localStorage.getItem('contactSubmissions');
    
    if (storedSubmissions) {
      // Parse the JSON string back to an array of submission objects
      setSubmissions(JSON.parse(storedSubmissions));
    } else {
      // If no submissions exist, create sample data for demonstration
      // This helps show how the admin dashboard will look with data
      const sampleSubmissions = [
        {
          id: 1,
          timestamp: '2024-01-15T10:30:00',
          studentName: 'Sarah Johnson',
          studentEmail: 'sarah.johnson@email.com',
          studentPhone: '+1 (555) 123-4567',
          studentClass: 'High School',
          parentName: 'Michael Johnson',
          parentPhone: '+1 (555) 987-6543',
          address: '123 Education Street, Learning City, LC 12345'
        },
        {
          id: 2,
          timestamp: '2024-01-14T14:20:00',
          studentName: 'Alex Chen',
          studentEmail: 'alex.chen@email.com',
          studentPhone: '+1 (555) 234-5678',
          studentClass: 'Middle School',
          parentName: 'Lisa Chen',
          parentPhone: '+1 (555) 876-5432',
          address: '456 Learning Avenue, Education Town, ET 54321'
        },
        {
          id: 3,
          timestamp: '2024-01-13T09:15:00',
          studentName: 'Emily Rodriguez',
          studentEmail: 'emily.rodriguez@email.com',
          studentPhone: '+1 (555) 345-6789',
          studentClass: 'Elementary',
          parentName: 'Carlos Rodriguez',
          parentPhone: '+1 (555) 765-4321',
          address: '789 Study Lane, Knowledge City, KC 67890'
        }
      ];
      
      // Set the sample data and save it to localStorage
      setSubmissions(sampleSubmissions);
      localStorage.setItem('contactSubmissions', JSON.stringify(sampleSubmissions));
    }
  };

  // Function to handle login form submission
  // This validates the admin credentials and logs the user in
  // In a real app, this would be server-side authentication
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Simple authentication check
    // Username: admin, Password: engagehub2024
    // IMPORTANT: In production, use secure server-side authentication
    if (username === 'admin' && password === 'engagehub2024') {
      setIsLoggedIn(true);
      // Save login status to localStorage so admin stays logged in
      localStorage.setItem('adminLoggedIn', 'true');
      loadSubmissions(); // Load the submissions data
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  // Function to handle logout
  // This clears the admin session and resets the form
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove login status from localStorage
    localStorage.removeItem('adminLoggedIn');
    // Reset form fields
    setUsername('');
    setPassword('');
    setSelectedSubmission(null);
  };

  // Function to delete a submission
  // This removes a submission from the list and localStorage
  const handleDeleteSubmission = (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      // Filter out the submission with the matching ID
      const updatedSubmissions = submissions.filter(sub => sub.id !== id);
      setSubmissions(updatedSubmissions);
      // Update localStorage with the new list
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
      setSelectedSubmission(null);
    }
  };

  // Function to view submission details
  // This opens the modal with detailed submission information
  const handleViewSubmission = (submission) => {
    setSelectedSubmission(submission);
  };

  // Function to close submission details modal
  const handleCloseDetails = () => {
    setSelectedSubmission(null);
  };

  // Function to format timestamp
  // Converts ISO timestamp to readable date/time format
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  // Return the JSX (HTML-like structure) for the admin page
  return (
    <div className="admin-page">
      {!isLoggedIn ? (
        // Login Form
        <div className="admin-login">
          <motion.div 
            className="login-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="login-header">
              <h1>Admin Login</h1>
              <p>Enter your credentials to access the admin dashboard</p>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">
                  <FaUser className="field-icon" />
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <FaLock className="field-icon" />
                  Password
                </label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                className="login-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
            </form>

            <div className="login-info">
              <p><strong>Demo Credentials:</strong></p>
              <p>Username: <code>admin</code></p>
              <p>Password: <code>engagehub2024</code></p>
            </div>
          </motion.div>
        </div>
      ) : (
        // Admin Dashboard
        <div className="admin-dashboard">
          <motion.div 
            className="dashboard-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="dashboard-title">
              <h1>Admin Dashboard</h1>
              <p>Manage contact form submissions and website content</p>
            </div>
            
            <motion.button
              className="logout-btn"
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSignOutAlt />
              Logout
            </motion.button>
          </motion.div>

          <div className="dashboard-content">
            <div className="dashboard-stats">
              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <div className="stat-info">
                  <h3>{submissions.length}</h3>
                  <p>Total Submissions</p>
                </div>
              </div>
              
              <div className="stat-card">
                <FaEnvelope className="stat-icon" />
                <div className="stat-info">
                  <h3>{submissions.filter(s => new Date(s.timestamp) > new Date(Date.now() - 24*60*60*1000)).length}</h3>
                  <p>Last 24 Hours</p>
                </div>
              </div>
              
              <div className="stat-card">
                <FaPhone className="stat-icon" />
                <div className="stat-info">
                  <h3>{submissions.filter(s => new Date(s.timestamp) > new Date(Date.now() - 7*24*60*60*1000)).length}</h3>
                  <p>This Week</p>
                </div>
              </div>
            </div>

            <div className="submissions-section">
              <h2>Contact Form Submissions</h2>
              
              {submissions.length === 0 ? (
                <div className="no-submissions">
                  <p>No submissions found.</p>
                </div>
              ) : (
                <div className="submissions-list">
                  {submissions.map((submission) => (
                    <motion.div 
                      key={submission.id}
                      className="submission-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="submission-info">
                        <h3>{submission.studentName}</h3>
                        <p className="submission-email">{submission.studentEmail}</p>
                        <p className="submission-date">{formatTimestamp(submission.timestamp)}</p>
                        <p className="submission-class">Class: {submission.studentClass}</p>
                      </div>
                      
                      <div className="submission-actions">
                        <motion.button
                          className="view-btn"
                          onClick={() => handleViewSubmission(submission)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaView />
                          View
                        </motion.button>
                        
                        <motion.button
                          className="delete-btn"
                          onClick={() => handleDeleteSubmission(submission.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaTrash />
                          Delete
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submission Details Modal */}
          {selectedSubmission && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetails}
            >
              <motion.div 
                className="modal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>Submission Details</h2>
                  <button className="close-btn" onClick={handleCloseDetails}>
                    ×
                  </button>
                </div>
                
                <div className="modal-body">
                  <div className="detail-section">
                    <h3>Student Information</h3>
                    <div className="detail-item">
                      <strong>Name:</strong> {selectedSubmission.studentName}
                    </div>
                    <div className="detail-item">
                      <strong>Email:</strong> {selectedSubmission.studentEmail}
                    </div>
                    <div className="detail-item">
                      <strong>Phone:</strong> {selectedSubmission.studentPhone}
                    </div>
                    <div className="detail-item">
                      <strong>Class:</strong> {selectedSubmission.studentClass}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Parent Information</h3>
                    <div className="detail-item">
                      <strong>Name:</strong> {selectedSubmission.parentName}
                    </div>
                    <div className="detail-item">
                      <strong>Phone:</strong> {selectedSubmission.parentPhone}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Address</h3>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="address-icon" />
                      {selectedSubmission.address}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Submission Details</h3>
                    <div className="detail-item">
                      <strong>Submitted:</strong> {formatTimestamp(selectedSubmission.timestamp)}
                    </div>
                    <div className="detail-item">
                      <strong>ID:</strong> #{selectedSubmission.id}
                    </div>
                  </div>
                </div>
                
                <div className="modal-footer">
                  <motion.button
                    className="close-modal-btn"
                    onClick={handleCloseDetails}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

// Export the Admin component so it can be used in other files
export default Admin; 