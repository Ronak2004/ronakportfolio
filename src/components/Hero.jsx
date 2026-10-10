import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiGithub, FiYoutube, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-semibold tracking-wide uppercase mb-3">Hi, I'm Ronak.</h2>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white leading-[1.2]">
              Web Developer <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">| PHP | JS | React.js</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              I build responsive websites and business-focused web applications. With hands-on experience in PHP, MySQL, and web development, I'm expanding my expertise in React.js and modern full-stack technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="flex items-center gap-2 bg-accent text-white px-6 py-3.5 rounded-full font-medium hover:bg-indigo-600 transition-all shadow-lg shadow-accent/20 group">
                View My Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" download="Ronak_Jethwa_Resume.pdf" className="bg-secondary text-white border border-gray-700 px-6 py-3.5 rounded-full font-medium hover:bg-gray-700 transition-colors">
                Download Resume
              </a>
              <a href="#contact" className="bg-transparent text-gray-300 border border-gray-700 px-6 py-3.5 rounded-full font-medium hover:text-white hover:border-gray-500 transition-colors">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              {[FiInstagram, FiLinkedin, FiGithub, FiYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-xl">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] mx-auto animate-float">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-full blur-3xl opacity-20"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-gray-800 bg-secondary/50 backdrop-blur-sm shadow-2xl overflow-hidden p-2">
                <div className="w-full h-full rounded-full bg-secondary overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/profile.jpeg"
                    alt="Ronak - Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800"
        >
          {[
            { label: '50+', desc: 'Websites Built' },
            { label: '100+', desc: 'E-commerce Projects' },
            { label: 'Multiple', desc: 'Brand Projects' },
            { label: 'Proven', desc: 'Marketing Campaigns' }
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-400 font-medium">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
