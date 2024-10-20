import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <button onClick={() => handleToggle(index)} className="accordion-toggle">
              {item.title}
            </button>
            {activeIndex === index && <div className="accordion-content">{item.content}</div>}
          </div>
        ))}
      </div>
    );
  };
          
export default Accordion;