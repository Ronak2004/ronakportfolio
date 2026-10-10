import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.form?.checkValidity();
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }
    // Simulate form submission
    setStatus({ type: 'success', message: 'Thank you for reaching out! I will get back to you soon.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-10 bg-primary relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-accent text-xs font-bold tracking-widest mb-4">
              CONTACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Together</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you have a question about my work, are looking for a developer, or just want to connect, feel free to reach out. I'm currently open to new opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:ronakjethwa148@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary border border-gray-800 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="font-semibold">ronakjethwa148@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918976307406" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary border border-gray-800 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone / WhatsApp</p>
                  <p className="font-semibold">+91 89763 07406</p>
                </div>
              </a>

              <div className="flex gap-4 pt-6 mt-6 border-t border-gray-800">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all">
                  <FiGithub />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/30 p-8 rounded-3xl border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-primary border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-primary border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full bg-primary border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>

              {status && (
                <div className={`p-3 rounded-lg text-sm ${status.type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-accent hover:bg-indigo-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
