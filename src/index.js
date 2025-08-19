// This is the main entry point of the React application
// It's the first file that runs when your app starts

// Import React - the main library for building user interfaces
import React from 'react';

// Import ReactDOM - handles rendering React components to the actual DOM (web page)
import ReactDOM from 'react-dom/client';

// Import global CSS styles that apply to the entire application
import './index.css';

// Import the main App component (the root component of our application)
import App from './App';

// Import performance monitoring function
import reportWebVitals from './reportWebVitals';

// Find the HTML element with id="root" in the public/index.html file
// This is where our React app will be mounted (inserted into the webpage)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render our React app into the DOM
// React.StrictMode is a development tool that helps find potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring - measures how fast your app loads and responds
// You can pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 