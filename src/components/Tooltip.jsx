import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ content, position = 'top', children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip tooltip-${position}`}>
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
