import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './Events.css';
import './Workshops.css';

const EventsWorkshops = () => {
  const [eventsRef, eventsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [workshopsRef, workshopsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const events = [
    {
      title: 'College Application Workshop',
      date: 'December 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'EngageHub Center',
      description: 'Learn the ins and outs of college applications, essay writing, and interview preparation.',
      attendees: '25/30',
      category: 'Workshop'
    },
    {
      title: 'SAT Preparation Bootcamp',
      date: 'December 20-22, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Online',
      description: 'Intensive 3-day SAT preparation program with practice tests and strategy sessions.',
      attendees: '15/20',
      category: 'Bootcamp'
    },
    {
      title: 'Parent Information Session',
      date: 'January 5, 2025',
      time: '6:00 PM - 7:30 PM',
      location: 'EngageHub Center',
      description: "Information session for parents about our programs and how to support their children's education.",
      attendees: '40/50',
      category: 'Information Session'
    },
    {
      title: 'Study Skills Seminar',
      date: 'January 12, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'EngageHub Center',
      description: 'Learn effective study techniques, time management, and note-taking strategies.',
      attendees: '30/35',
      category: 'Seminar'
    }
  ];

  const workshops = [
    {
      title: 'Study Skills Mastery',
      duration: '2 hours',
      location: 'EngageHub Center',
      capacity: '15 students',
      description: 'Learn effective study techniques, note-taking methods, and time management strategies.',
      topics: ['Note-taking strategies', 'Memory techniques', 'Time management', 'Goal setting']
    },
    {
      title: 'College Essay Writing',
      duration: '3 hours',
      location: 'EngageHub Center',
      capacity: '12 students',
      description: 'Master the art of writing compelling college application essays that stand out.',
      topics: ['Essay structure', 'Personal statement', 'Common App', 'Editing techniques']
    },
    {
      title: 'Math Problem Solving',
      duration: '2.5 hours',
      location: 'Online',
      capacity: '20 students',
      description: 'Develop critical thinking and problem-solving skills in mathematics.',
      topics: ['Algebra strategies', 'Geometry concepts', 'Calculus basics', 'Test strategies']
    },
    {
      title: 'Public Speaking Confidence',
      duration: '2 hours',
      location: 'EngageHub Center',
      capacity: '10 students',
      description: 'Build confidence and improve public speaking skills for academic presentations.',
      topics: ['Speech preparation', 'Body language', 'Voice projection', 'Audience engagement']
    }
  ];

  return (
    <div className="events-page">
      {/* Unified Hero Section */}
      <section className="events-hero section">
        <div className="container">
          <motion.div
            className="events-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Events & Workshops</h1>
            <p className="section-subtitle">
              Join us for educational events, workshops, and seminars designed to enhance your learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-grid section" ref={eventsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Upcoming Events</h2>
          </motion.div>
          <div className="events-container">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="event-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="event-header">
                  <span className="event-category">{event.category}</span>
                  <h3 className="event-title">{event.title}</h3>
                </div>
                <div className="event-details">
                  <div className="event-info">
                    <FaCalendarAlt />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-info">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-info">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-info">
                    <FaUsers />
                    <span>{event.attendees} registered</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="btn btn-primary">Register Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="workshops-grid section" ref={workshopsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Workshops</h2>
          </motion.div>
          <div className="workshops-container">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                className="workshop-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="workshop-header">
                  <h3 className="workshop-title">{workshop.title}</h3>
                </div>
                <div className="workshop-details">
                  <div className="workshop-info">
                    <FaClock />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="workshop-info">
                    <FaMapMarkerAlt />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="workshop-info">
                    <FaUsers />
                    <span>{workshop.capacity}</span>
                  </div>
                </div>
                <p className="workshop-description">{workshop.description}</p>
                <div className="workshop-topics">
                  <h4>Topics Covered:</h4>
                  <ul>
                    {workshop.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary">Register for Workshop</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive updates about upcoming events and educational opportunities.</p>
            <a href="/newsletter" className="btn btn-primary">Subscribe</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsWorkshops;


