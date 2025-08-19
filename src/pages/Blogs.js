import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
  const [blogsRef, blogsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const blogs = [
    {
      title: "10 Effective Study Techniques for College Students",
      author: "Dr. Sarah Johnson",
      date: "December 10, 2024",
      category: "Study Tips",
      excerpt: "Discover proven study methods that can help you excel in your academic journey and improve your learning efficiency.",
      readTime: "5 min read"
    },
    {
      title: "How to Write a Winning College Application Essay",
      author: "Michael Chen",
      date: "December 8, 2024",
      category: "College Applications",
      excerpt: "Learn the essential elements of a compelling college essay that will make your application stand out from the crowd.",
      readTime: "7 min read"
    },
    {
      title: "The Importance of Time Management in Academic Success",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      category: "Academic Success",
      excerpt: "Explore how proper time management can significantly impact your academic performance and reduce stress levels.",
      readTime: "4 min read"
    },
    {
      title: "Preparing for Standardized Tests: A Comprehensive Guide",
      author: "Dr. Sarah Johnson",
      date: "December 3, 2024",
      category: "Test Preparation",
      excerpt: "Get expert tips and strategies for preparing for SAT, ACT, and other standardized tests effectively.",
      readTime: "8 min read"
    },
    {
      title: "Building Confidence in Public Speaking",
      author: "Michael Chen",
      date: "November 30, 2024",
      category: "Communication Skills",
      excerpt: "Develop essential public speaking skills that will benefit you throughout your academic and professional life.",
      readTime: "6 min read"
    },
    {
      title: "The Role of Parents in Student Success",
      author: "Emily Rodriguez",
      date: "November 28, 2024",
      category: "Parenting",
      excerpt: "Understanding how parents can support their children's educational journey without being overbearing.",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="blogs-page">
      <section className="blogs-hero section">
        <div className="container">
          <motion.div 
            className="blogs-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Educational Blog</h1>
            <p className="section-subtitle">
              Insights, tips, and advice to help you succeed in your academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blogs-grid section" ref={blogsRef}>
        <div className="container">
          <div className="blogs-container">
            {blogs.map((blog, index) => (
              <motion.div 
                key={index}
                className="blog-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={blogsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="blog-header">
                  <span className="blog-category">{blog.category}</span>
                  <h3 className="blog-title">{blog.title}</h3>
                </div>
                
                <div className="blog-meta">
                  <div className="blog-info">
                    <FaUser />
                    <span>{blog.author}</span>
                  </div>
                  <div className="blog-info">
                    <FaCalendarAlt />
                    <span>{blog.date}</span>
                  </div>
                  <div className="blog-info">
                    <FaTag />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <p className="blog-excerpt">{blog.excerpt}</p>
                
                <button className="btn btn-secondary">Read More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 