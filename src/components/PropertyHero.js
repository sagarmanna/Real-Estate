import React from 'react';

const PropertyHero = ({ 
  totalFound, 
  developer, 
  setDeveloper, 
  type, 
  setType, 
  developers, 
  types, 
  onReset 
}) => {
  return (
    <div className="hero-section-container">
      {/* 1. Precise Figma Heading */}
      <h1 className="hero-main-title">
        Discover the <br /> Best Properties
      </h1>

      {/* 2. Filter Dropdowns Grid */}
      <div className="dropdown-grid">
        <div className="dropdown-item">
          <label className="figma-label">Developer</label>
          <div className="select-box">
            <select 
              value={developer} 
              onChange={(e) => setDeveloper(e.target.value)}
            >
              <option value="All">All Developers</option>
              {developers.filter(d => d !== "All").map(dev => (
                <option key={dev} value={dev}>{dev}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="dropdown-item">
          <label className="figma-label">Type</label>
          <div className="select-box">
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
            >
              <option value="All">All Types</option>
              {types.filter(t => t !== "All").map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 3. The Separator Bar - This fixes the alignment issue */}
      <div className="results-status-bar">
        <span className="results-text">
          {totalFound} Properties Found
        </span>
        
        <button className="reset-filter-btn" onClick={onReset}>
          <span className="reset-icon-svg">↺</span> Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyHero;