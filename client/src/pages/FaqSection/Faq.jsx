import React, { useState } from 'react';
import './Faq.css';

function Faq({ pregunta, respuesta }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
      <div className="pregunta">{pregunta}</div>
      <div className="respuesta">{isOpen && respuesta}</div>
    </div>
  );
}

export default Faq;