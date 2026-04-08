import React from "react";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  if (!Array.isArray(properties)) return <p>No data</p>;

  return (
    <div className="property-list">
      {properties.map((item) => (
        <PropertyCard key={item.id} property={item} />
      ))}
    </div>
  );
}

export default PropertyList;