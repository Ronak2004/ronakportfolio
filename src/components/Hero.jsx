import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiGithub, FiYoutube, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-600 mb-6 border border-gray-200">
              WEB DEVELOPER • E-COMMERCE • DIGITAL MARKETING
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-[1.1]">
              Building Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Grow Brands.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              I create modern websites, e-commerce experiences and digital marketing solutions that help brands build a stronger online presence.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 group">
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="bg-white text-gray-900 border border-gray-200 px-6 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Let's Connect
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
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full blur-3xl opacity-50"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-white/50 bg-white/30 backdrop-blur-sm shadow-2xl overflow-hidden p-2">
                <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-200"
        >
          {[
            { label: '50+', desc: 'Websites Built' },
            { label: '100+', desc: 'E-commerce Projects' },
            { label: 'Multiple', desc: 'Brand Projects' },
            { label: 'Proven', desc: 'Marketing Campaigns' }
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-500 font-medium">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
