import React, { useRef, useState, useEffect } from 'react';

const Tooltip = ({ content, position = 'top', children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;

    if (isVisible && tooltip && container) {
      const { top, left, width, height } = container.getBoundingClientRect();
      
      switch(position) {
        case 'top':
          tooltip.style.bottom = `${window.innerHeight - top}px`;
          tooltip.style.left = `${left + width / 2}px`;
          break;
        case 'bottom':
          tooltip.style.top = `${top + height}px`;
          tooltip.style.left = `${left + width / 2}px`;
          break;
        case 'left':
          tooltip.style.top = `${top + height / 2}px`;
          tooltip.style.right = `${window.innerWidth - left}px`;
          break;
        case 'right':
          tooltip.style.top = `${top + height / 2}px`;
          tooltip.style.left = `${left + width}px`;
          break;
      }
    }
  }, [isVisible, position]);

  return (
    <div ref={containerRef} className="tooltip-container">
      {children}
      {isVisible && (
        <div ref={tooltipRef} className={`tooltip tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
