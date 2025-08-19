import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaGlobe,
  FaAward,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    {
      icon: <FaGraduationCap />,
      title: "Excellence",
      description: "We strive for academic excellence in everything we do, helping students reach their highest potential."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building a supportive community where students feel valued, heard, and encouraged to grow."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Embracing innovative teaching methods and technologies to enhance the learning experience."
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Our passion for education drives us to go above and beyond for every student's success."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      description: "PhD in Education with 15+ years of experience in academic leadership and student development.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Academic Programs",
      description: "Master's in Curriculum Development with expertise in personalized learning strategies.",
      image: "/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Student Success Coordinator",
      description: "Certified counselor with a passion for helping students navigate their educational journey.",
      image: "/team/emily.jpg"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">About EngageHub</h1>
            <p className="section-subtitle">
              Empowering students to achieve their academic dreams through personalized education and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

            {/* Team Section */}
            <section className="team section" ref={teamRef}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Dedicated professionals committed to your academic success
            </p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="team-image">
                  <div className="placeholder-image">
                    <FaUsers />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO's Message Section */}
      <section className="ceo-message section">
        <div className="container">
          <motion.div 
            className="ceo-message-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="ceo-text">
              <h2>CEO's Message</h2>
              <p className="ceo-quote">Your dreams aren't too big. The world is too small.</p>
              <p className="ceo-message-text">
                Every breakthrough started with a student who refused to settle. Who believed their vision mattered more than their fears. 
                You carry solutions the world desperately needs – your unique perspective, your passion, your relentless curiosity.
              </p>
              <p className="ceo-message-text">
                This is your moment. This is your time to make the impossible happen.
              </p>
              <p className="ceo-closing">Your story isn't written yet. Pick up the pen.</p>
            </div>
            <div className="ceo-image">
              <div className="ceo-image-container">
                <img 
                  src="/ceo.jpg" 
                  alt="CEO Speaking at Event" 
                  className="ceo-image-actual"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission section" ref={missionRef}>
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Mission</h2>
              <p>
                At EngageHub, we believe that every student deserves access to quality education that nurtures their unique talents and potential. 
                Our mission is to provide comprehensive educational services that go beyond traditional tutoring, creating a supportive environment 
                where students can thrive academically and personally.
              </p>
              <p>
                We are committed to fostering a love for learning, building confidence, and equipping students with the skills they need to succeed 
                in their academic journey and beyond. Through personalized attention, innovative teaching methods, and a dedicated team of educators, 
                we help students unlock their full potential.
              </p>
            </motion.div>
            <motion.div 
              className="mission-stats"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Students Helped</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values section" ref={valuesRef}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at EngageHub
            </p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Story Section */}
      <section className="story section">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              EngageHub was founded in 2014 with a simple yet powerful vision: to transform the way students approach education. 
              What started as a small tutoring center has grown into a comprehensive educational service provider, serving hundreds 
              of students across multiple grade levels.
            </p>
            <p>
              Our journey has been marked by countless success stories, from students who improved their grades significantly to 
              those who gained admission to their dream universities. Each success story reinforces our commitment to providing 
              exceptional educational services that make a real difference in students' lives.
            </p>
            <p>
              Today, we continue to innovate and expand our services, always keeping our core mission at heart: empowering students 
              to achieve their academic dreams through personalized, comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 