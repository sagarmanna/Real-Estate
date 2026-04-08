import React from 'react';

const Header = ({ onContactClick }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Brand Logo */}
        <div className="logo-brand">Dev.</div>

        {/* Central Navigation */}
        <nav className="navigation-links">
          <a href="/" className="nav-item">Home</a>
          <a href="/listing" className="nav-item">Listing</a>
          <a href="/about" className="nav-item">About Us</a>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
        <button className="nav-contact-btn" onClick={onContactClick}>
  Contact
</button>
        </div>
      </div>
    </header>
  );
};

export default Header;