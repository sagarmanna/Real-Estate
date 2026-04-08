import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span className="footer-dot">•</span>
          <a href="/terms" className="footer-link">Terms of Use</a>
          <span className="footer-dot">•</span>
          <a href="/sitemap" className="footer-link">Site Map</a>
        </div>
        <p className="footer-copyright">
          © Copyright 2024, All Rights Reserved by Dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;