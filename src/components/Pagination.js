import React from 'react';

const Pagination = ({ total, current, pageSize, onChange }) => {
  const pageCount = Math.max(0, Math.ceil(total / pageSize));
  
  if (pageCount <= 1) return null;

  return (
    <div className="pagination-container">
      {[...Array(pageCount)].map((_, i) => {
        const pageNumber = i + 1;
        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onChange(pageNumber)}
            // Ensure both 'pagination-circle' and 'active' classes are applied correctly
            className={`pagination-circle ${current === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;