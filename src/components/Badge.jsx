import React from "react";


const Badge = ({ text, variant = 'primary' }) => {
    return (
      <span className={`badge badge-${variant}`}>
        {text}
      </span>
    );
  };
  
export default Badge;