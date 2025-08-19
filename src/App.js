// This is the main App component - the root component of our React application
// It sets up the overall structure and routing for the entire website

// Import React - the main library for building user interfaces
import React from 'react';

// Import routing components from react-router-dom
// BrowserRouter: Provides routing functionality for the entire app
// Routes: Container for all the route definitions
// Route: Defines individual routes (pages) in the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our custom components
// Header: The navigation bar that appears on all pages
// Footer: The footer that appears on all pages
import Header from './components/Header';
import Footer from './components/Footer';

// Import all the page components
// Each of these represents a different page in our website
import Home from './pages/Home';           // Main landing page
import About from './pages/About';         // About us page
import Services from './pages/Services';   // Services page
import EventsWorkshops from './pages/EventsWorkshops'; // Combined Events & Workshops page
import Blogs from './pages/Blogs';         // Blog articles page
import Newsletter from './pages/Newsletter'; // Newsletter subscription page
import Internship from './pages/Internship'; // Internship opportunities page
import Contact from './pages/Contact';     // Contact form page
import ContactSuccess from './pages/ContactSuccess'; // Success page after form submission
import Admin from './pages/Admin';         // Admin dashboard page

// Import the CSS file for this component
import './App.css';

// Main App component function
function App() {
  return (
    // Router wraps the entire application to enable navigation
    <Router>
      {/* Main container div for the entire application */}
      <div className="App">
        {/* Header component - appears on every page */}
        <Header />
        
        {/* Main content area - this is where page content will be displayed */}
        <main>
          {/* Routes container - defines all the different pages in our app */}
          <Routes>
            {/* Home page - this is the default page when someone visits the website */}
            <Route path="/" element={<Home />} />
            
            {/* About page - information about the company */}
            <Route path="/about" element={<About />} />
            
            {/* Services page - list of services offered */}
            <Route path="/services" element={<Services />} />
            
            {/* Events & Workshops - combined page */}
            <Route path="/events" element={<EventsWorkshops />} />
            <Route path="/workshops" element={<EventsWorkshops />} />
            
            {/* Blogs page - blog articles */}
            <Route path="/blogs" element={<Blogs />} />
            
            {/* Newsletter page - subscription form */}
            <Route path="/newsletter" element={<Newsletter />} />
            
            {/* Internship page - internship opportunities */}
            <Route path="/internship" element={<Internship />} />
            
            {/* Contact page - contact form */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Contact success page - shown after form is submitted */}
            <Route path="/contact-success" element={<ContactSuccess />} />
            
            {/* Admin page - password-protected admin dashboard */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        
        {/* Footer component - appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

// Export the App component so it can be used in other files
export default App; 