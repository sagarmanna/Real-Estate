import React from 'react';

const Hero = ({ totalFound, developer, setDeveloper, type, setType, developers, types, onReset }) => {
  return (
    <div className="hero-section-container">
      {/* 1. Main Heading - Note the <br /> for exact Figma wrapping */}
      <h1 className="hero-main-title">
        Discover the <br /> Best Properties
      </h1>

      {/* 2. Centered Dropdowns */}
      <div className="dropdown-grid">
        <div className="dropdown-item">
          <label className="figma-label">Developer</label>
          <div className="select-box">
            <select value={developer} onChange={(e) => setDeveloper(e.target.value)}>
              <option value="All">All Developers</option>
              {developers.filter(d => d !== "All").map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        <div className="dropdown-item">
          <label className="figma-label">Type</label>
          <div className="select-box">
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="All">All Types</option>
              {types.filter(t => t !== "All").map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* 3. The Separator Row (Total + Reset) */}
      <div className="results-status-bar">
        <span className="results-text">{totalFound} Properties Found</span>
        <button className="reset-filter-btn" onClick={onReset}>
          <span className="reset-icon-svg">↺</span> Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default Hero;