import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import '../../styles/modal.css';

const ContactModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="modal-content relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-xl">×</button>
        {step === 1 && <Step1 data={formData} setForm={setFormData} onNext={() => setStep(2)} />}
        {step === 2 && <Step2 data={formData} setForm={setFormData} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
        {step === 3 && <Step3 onClose={onClose} />}
      </div>
    </div>
  );
};

export default ContactModal;