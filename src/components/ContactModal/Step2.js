import React, { useState } from 'react';

const Step2 = ({ data, setForm, onBack, onNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!/\S+@\S+\.\S+/.test(data.email)) err.email = "Invalid email format";
    if (!/^\d{10,12}$/.test(data.phone)) err.phone = "Phone must be 10-12 digits";
    
    setErrors(err);
    if (Object.keys(err).length === 0) onNext();
  };

  return (
    <div className="text-center animate-in">
      <h3 className="text-3xl font-heading mb-10">Get In Touch With Us</h3>
      <div className="text-left mb-5">
        <label className="figma-label block mb-2">Email</label>
        <input 
          className="dark-input" 
          placeholder="Enter email" 
          value={data.email}
          onChange={(e) => setForm({...data, email: e.target.value})}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="text-left mb-10">
        <label className="figma-label block mb-2">Phone Number</label>
        <div className="flex gap-2">
          <div className="dark-input w-24 flex items-center justify-center text-xs">🇮🇳 +91</div>
          <input 
            className="dark-input flex-1" 
            placeholder="Phone Number" 
            value={data.phone}
            onChange={(e) => setForm({...data, phone: e.target.value})}
          />
        </div>
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>
      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border border-white/20 py-4 rounded-xl font-bold uppercase text-[10px]">Back</button>
        <button onClick={validate} className="flex-1 bg-white text-black py-4 rounded-xl font-bold uppercase text-[10px]">Submit</button>
      </div>
    </div>
  );
};

export default Step2; // <--- CRITICAL: Add this line