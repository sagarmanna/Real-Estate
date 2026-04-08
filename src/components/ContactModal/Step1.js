import React from 'react';

const Step1 = ({ data, setForm, onNext }) => (
  <div className="text-center animate-in">
    <p className="figma-label mb-2">Contact Us</p>
    <h3 className="text-3xl font-heading mb-4">Get In Touch With Us</h3>
    <p className="text-sm text-gray-400 mb-10 px-6">Get free consultation with a professional real estate consultant.</p>
    <div className="text-left mb-8">
      <label className="figma-label block mb-2">Name</label>
      <input 
        type="text" 
        className="dark-input" 
        placeholder="Enter your name"
        value={data.name} 
        onChange={(e) => setForm({...data, name: e.target.value})}
      />
    </div>
    <button 
      disabled={data.name.length < 4}
      onClick={onNext}
      className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest disabled:opacity-20 transition-all hover:bg-gray-200"
    >
      Next
    </button>
  </div>
);

export default Step1; // <--- CRITICAL: Add this line