import React, { useState, useEffect } from 'react';
import propertyData from './data/properties.json';
import Header from './components/Header';
import PropertyCard from './components/PropertyCard';
import Pagination from './components/Pagination';
import ContactModal from './components/ContactModal/ContactModal';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [developer, setDeveloper] = useState('All');
  const [type, setType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredList, setFilteredList] = useState(propertyData.properties);

  const pageSize = 9;

  // Dynamically get unique filter options from data
  const uniqueDevs = ["All", ...new Set(propertyData.properties.map(p => p.developer))];
  const uniqueTypes = ["All", ...new Set(propertyData.properties.map(p => p.property_type))];

  useEffect(() => {
    let result = propertyData.properties;
    
    if (developer !== 'All') {
      result = result.filter(p => p.developer === developer);
    }
    
    if (type !== 'All') {
      result = result.filter(p => p.property_type === type);
    }
    
    setFilteredList(result);
    setCurrentPage(1); 
  }, [developer, type]);

  const currentItems = filteredList.slice(
    (currentPage - 1) * pageSize, 
    currentPage * pageSize
  );

  const handleReset = () => {
    setDeveloper('All');
    setType('All');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. HEADER */}
      <Header onContactClick={() => setIsModalOpen(true)} />

      {/* 2. HERO & FILTERS */}
      <div className="hero-section-container">
        <h2 className="hero-main-title">
          Discover the <br /> Best Properties
        </h2>
        
        <div className="dropdown-grid">
          <div className="dropdown-item">
            <label className="figma-label">Developer</label>
            <div className="select-box">
              <select value={developer} onChange={(e) => setDeveloper(e.target.value)}>
                {uniqueDevs.map(val => (
                  <option key={val} value={val}>{val === 'All' ? 'All Developers' : val}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="dropdown-item">
            <label className="figma-label">Type</label>
            <div className="select-box">
              <select value={type} onChange={(e) => setType(e.target.value)}>
                {uniqueTypes.map(val => (
                  <option key={val} value={val}>{val === 'All' ? 'All Types' : val}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 3. RESULTS STATUS BAR */}
        <div className="results-status-bar">
          <p className="results-text">
            {filteredList.length} Properties Found
          </p>
          <button onClick={handleReset} className="reset-filter-btn">
            <span className="reset-icon-svg">↺</span> Reset All Filters
          </button>
        </div>
      </div>

      {/* 4. PROPERTY GRID */}
      <main className="property-grid-container">
        <div className="property-grid">
          {currentItems.map(item => (
            <PropertyCard 
              key={item.id} 
              item={item} 
              onContact={() => setIsModalOpen(true)} 
            />
          ))}
        </div>

        {/* 5. PAGINATION */}
        <Pagination 
          total={filteredList.length} 
          current={currentPage} 
          pageSize={pageSize} 
          onChange={setCurrentPage} 
        />
      </main>

      {/* 6. FOOTER (Using Component to match Figma Global CSS) */}
      <Footer />

      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;