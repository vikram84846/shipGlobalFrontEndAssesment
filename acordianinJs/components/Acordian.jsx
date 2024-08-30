// Accordion.js
import React, { useState } from 'react';
const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <div className={`accordion-header ${isActive ? 'active' : ''}`} onClick={onClick}>
        {title}
      </div>
      <div className="accordion-content" style={{ maxHeight: isActive ? '200px' : '0' }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
