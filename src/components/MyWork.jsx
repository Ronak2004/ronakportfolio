import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MyWork.css';

const portfolioData = {
  "Website Development": {
    "Coding": [
      { name: "Geetee Travels", url: "https://geeteetravels.com/" },
      { name: "Smart N Snappy", url: "https://smartnsnappy.com/" },
      { name: "Shri Radha Govind Ashram", url: "https://shriradhagovindashram.com/" },
      { name: "Aadinath Textilesa", url: "https://aadinathtextilesa1.com/" },
      { name: "Smart N Snappy Rental System", url: "https://smartnsnappy.com/rent/" }
    ],
    "Shopify": [
      { name: "Living Leisures", url: "http://livingleisures.com" },
      { name: "Ramdut Tea", url: "https://ramduttea.com/" }
    ],
    "Wix": [
      { name: "Samruddhi", url: "https://www.samruddhiinds.com" }
    ],
    "GoDaddy": [
      { name: "Sangeeta Lakhotia", url: "https://sangeetalakhotia.com" }
    ]
  }
};

const MyWork = () => {
  const [activeCategory, setActiveCategory] = useState("Coding");
  const categories = Object.keys(portfolioData["Website Development"]);
  
  return (
    <section className="my-work-section" id="my-work">
      <div className="my-work-container">
        <motion.div 
          className="my-work-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="my-work-title">My <span>Portfolio</span></h2>
          <p className="my-work-subtitle">A minimal and clean showcase of my recent client work and custom solutions.</p>
        </motion.div>

        <div className="my-work-content">
          <div className="my-work-tabs">
            {categories.map((category) => (
              <button 
                key={category}
                className={`my-work-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div className="my-work-projects" layout>
            <AnimatePresence mode="popLayout">
              {portfolioData["Website Development"][activeCategory].map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-work-card-minimal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <div className="minimal-card-content">
                    <div className="minimal-card-header">
                      <span className="minimal-platform-badge">{activeCategory}</span>
                      <div className="arrow-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="arrow-icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="minimal-card-footer">
                      <h3 className="minimal-project-title">{project.name}</h3>
                      <span className="minimal-visit-text">Visit Website</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
