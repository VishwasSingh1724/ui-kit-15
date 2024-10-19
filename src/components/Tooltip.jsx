import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ content, position = 'top', children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className={`tooltip tooltip-${position}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
