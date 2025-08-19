import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaBook, 
  FaLaptop, 
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaCalendarAlt,
  FaCertificate
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [services2Ref, services2InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Exam Preparation",
      description: "Personalized one-on-one and group tutoring sessions in all subjects from elementary to university level.",
      features: ["Subject-specific tutoring",  "Study skills development"]
    },
    {
      icon: <FaBook />,
      title: "Admission Consultancy",
      description: "Comprehensive preparation for standardized tests including SAT, ACT, IELTS, TOEFL, and more.",
      features: ["Practice tests", "Mock exams"]
    },
    {
      icon: <FaLaptop />,
      title: "Tutoring Center",
      description: "Flexible online courses and virtual tutoring sessions accessible from anywhere in the world.",
      features: ["Virtual classrooms", "24/7 support"]
    },
    {
      icon: <FaUsers />,
      title: "Internship",
      description: "Professional guidance to help students make informed decisions about their academic and career paths.",
      features: ["Career assessment", "Interview preparation"]
    },
    {
      icon: <FaChartLine />,
      title: "Research",
      description: "Develop essential study techniques and time management skills for academic success.",
      features: ["Note-taking methods",  "Goal setting"]
    },
    {
      icon: <FaGlobe />,
      title: "Career Counseling",
      description: "Support for international students and those seeking education opportunities abroad.",
      features: ["Visa guidance", "University partnerships"]
    }
  ];

  const services2 = [
    {
      icon: <FaGraduationCap />,
      title: "SAT",
      description: "Personalized one-on-one and group tutoring sessions in all subjects from elementary to university level.",
      features: ["Subject-specific tutoring",  "Study skills development"]
    },
    {
      icon: <FaBook />,
      title: "ACT",
      description: "Comprehensive preparation for standardized tests including SAT, ACT, IELTS, TOEFL, and more.",
      features: ["Practice tests",  "Mock exams"]
    },
    {
      icon: <FaLaptop />,
      title: "AP",
      description: "Flexible online courses and virtual tutoring sessions accessible from anywhere in the world.",
      features: ["Virtual classrooms", "24/7 support"]
    },
    {
      icon: <FaUsers />,
      title: "MYP/IB",
      description: "Professional guidance to help students make informed decisions about their academic and career paths.",
      features: ["Career assessment",  "Interview preparation"]
    },
    {
      icon: <FaChartLine />,
      title: "AMC",
      description: "Develop essential study techniques and time management skills for academic success.",
      features: ["Note-taking methods", "Goal setting"]
    },
    {
      icon: <FaGlobe />,
      title: "IGCSE",
      description: "Support for international students and those seeking education opportunities abroad.",
      features: ["Visa guidance", "University partnerships"]
    },
    {
      icon: <FaGlobe />,
      title: "A LEVEL",
      description: "Support for international students and those seeking education opportunities abroad.",
      features: ["Visa guidance", "University partnerships"]
    },
    {
      icon: <FaGlobe />,
      title: "GMAT",
      description: "Support for international students and those seeking education opportunities abroad.",
      features: ["Visa guidance",  "University partnerships"]
    },
    {
      icon: <FaGlobe />,
      title: "GRE",
      description: "Support for international students and those seeking education opportunities abroad.",
      features: ["Visa guidance",  "University partnerships"]
    },
  ];

  const features = [
    {
      icon: <FaCertificate />,
      title: "Certified Tutors",
      description: "All our tutors are certified educators with extensive experience in their respective fields."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Flexible Scheduling",
      description: "Sessions available at times that work for you, including evenings and weekends."
    },
    {
      icon: <FaUsers />,
      title: "Personalized Approach",
      description: "Customized learning plans tailored to each student's unique needs and learning style."
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports to monitor student improvement."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive educational services designed to support students at every stage of their academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section" ref={servicesRef}>
        <div className="container">
          <div className="services-container">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Features Section */}
      <section className="features section" ref={featuresRef}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose Our Services</h2>
            <p className="section-subtitle">
              We provide exceptional educational support with proven results
            </p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Services2 Grid */}
       <h2 style={{textAlign: "center", marginTop: "0px", marginBottom: "0", }}>Exam Preparation</h2>
      <section className="services2-grid section" ref={services2Ref}>
        <div className="container">
          <div className="services2-container">
            {services2.map((service, index) => (
              <motion.div 
                key={index}
                className="service2-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service2-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service2-description">{service.description}</p>
                <ul className="service2-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
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
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your educational needs and find the perfect program for you.</p>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 