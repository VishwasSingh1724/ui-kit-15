import React, { useState } from 'react';


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
