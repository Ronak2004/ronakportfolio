import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const portfolioData = {
  "Web Development": [
    { name: "Geetee Travels", url: "https://geeteetravels.com/", tech: "PHP, MySQL" },
    { name: "Smart N Snappy", url: "https://smartnsnappy.com/", tech: "Custom Web" },
    { name: "Shri Radha Govind Ashram", url: "https://shriradhagovindashram.com/", tech: "Web App" },
    { name: "Aadinath Textiles", url: "https://aadinathtextilesa1.com/", tech: "Web App" },
    { name: "Smart N Snappy Rental System", url: "https://smartnsnappy.com/rent/", tech: "PHP System" }
  ],
  "Shopify": [
    { name: "Living Leisures", url: "http://livingleisures.com", tech: "Shopify Store" },
    { name: "Ramdut Tea", url: "https://ramduttea.com/", tech: "Shopify Store" }
  ],
  "Wix": [
    { name: "Samruddhi", url: "https://www.samruddhiinds.com", tech: "Wix Website" }
  ],
  "GoDaddy": [
    { name: "Sangeeta Lakhotia", url: "https://sangeetalakhotia.com", tech: "GoDaddy Builder" }
  ],
  "Digital Marketing": [
    { name: "SEO & Ads Campaigns", url: "#", tech: "Google Ads, Meta Ads" },
    { name: "Amazon & Flipkart Stores", url: "#", tech: "E-commerce Ops" }
  ]
};

const MyWork = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const categories = Object.keys(portfolioData);
  
  return (
    <section id="projects" className="py-10 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
              FEATURED PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent client work and custom web solutions.
          </p>
        </motion.div>

        <div className="mb-6">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category 
                    ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                    : 'bg-secondary text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {portfolioData[activeCategory].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                className="bg-secondary/40 border border-gray-800 rounded-2xl p-6 group hover:border-gray-600 hover:bg-secondary/60 transition-colors flex flex-col h-full relative overflow-hidden"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold tracking-wider text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                      {project.tech}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                
                <div className="mt-8 pt-4 border-t border-gray-800">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    View Project <FiExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWork;
