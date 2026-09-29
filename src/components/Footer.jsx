import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              RONAK<span className="footer-dot"></span>
            </a>
            <p className="footer-tagline">
              Building digital experiences that grow brands and deliver real results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-group-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#my-work">My Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links-group">
            <h4 className="footer-group-title">Get In Touch</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+918976307406">
                  <span className="footer-contact-icon">📞</span> +91 89763 07406
                </a>
              </li>
              <li>
                <a href="https://wa.me/918976307406" target="_blank" rel="noopener noreferrer">
                  <span className="footer-contact-icon">💬</span> WhatsApp Me
                </a>
              </li>
              <li>
                <a href="mailto:ronakjethwa148@gmail.com">
                  <span className="footer-contact-icon">✉️</span> ronakjethwa148@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} Ronak. All rights reserved.</p>
          <p className="footer-made">
            Crafted with <span className="footer-heart">♥</span> for great web experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
