import React from 'react';

const Step3 = ({ onClose }) => (
  <div className="text-center py-4 animate-in">
    <div className="flex justify-center mb-8">
      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </div>
    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 font-bold">Thank you for connecting!</p>
    <h3 className="text-[28px] font-heading leading-tight mb-6 px-2">We appreciate your interest and will be in touch soon</h3>
    <p className="text-sm text-gray-400 mb-12 px-4">In the meantime, feel free to browse our website to learn more.</p>
    <button onClick={onClose} className="w-full text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:opacity-70 transition-all">
      Explore more →
    </button>
  </div>
);

export default Step3; // <--- CRITICAL: Add this line