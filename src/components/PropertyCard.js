import React from 'react';

const PropertyCard = ({ item, onContact }) => {
  return (
    <div className="property-card bg-white">

      <div className="property-image-wrapper">
        <img 
          src={item.property_image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="property-info">
        
        <h3 className="property-title">
          {item.title}
        </h3>

        
        <p className="property-developer">
          By {item.developer}
        </p>

        
        <div className="location-row">
          <svg 
            width="18" height="18" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="property-location-text">{item.area}</span>
        </div>

        
        <p className="property-price-display">
          {item.currency} {item.property_price.toLocaleString()}
        </p>

        
        <button 
          className="btn-card-contact" 
          onClick={onContact}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;