import React from "react";

const Accordion = ({ items }) => {
  const handleToggle = (event) => {
    const content = event.target.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');
    
    allContents.forEach(item => {
      if (item !== content) {
        item.style.maxHeight = '0';
      }
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button onClick={handleToggle} className="accordion-toggle">
            {item.title}
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-out'
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;