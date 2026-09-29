import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'My Work', href: '#my-work' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 rounded-full px-6 py-2' : 'px-2'}`}>
          
          {/* Logo */}
          <a href="#" className="text-2xl font-black tracking-tighter text-gray-900 flex items-center gap-1 group">
            RONAK
            <span className="w-2 h-2 rounded-full bg-gray-900 group-hover:scale-150 transition-transform duration-300"></span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors group"
              >
                {link.name}
                <span className="absolute inset-x-4 -bottom-1 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a 
              href="#contact" 
              className="relative overflow-hidden group bg-gray-900 text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 text-2xl p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full px-4 pt-2 pb-6 overflow-hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-semibold text-gray-800 hover:text-black hover:pl-2 transition-all border-b border-gray-50 pb-2"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="#contact"
                onClick={() => setIsOpen(false)} 
                className="mt-4 bg-gray-900 text-white text-center py-3 rounded-xl font-semibold shadow-lg"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
