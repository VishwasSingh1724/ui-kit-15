import React, { useState } from 'react';


const Button = ({ children, onClick, size = 'medium', variant = 'primary', loading = false, disabled = false, icon }) => {
  const [state, setstate] = useState("hello")
  
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? 'Loading...' : icon ? <span className="btn-icon">{icon}</span> : null}
      {state}
    </button>
  );
};


export default Button;
