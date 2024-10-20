import React from 'react';

const Button = ({ children, onClick, size = 'medium', variant = 'primary', loading = false, disabled = false, icon }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? 'Loading...' : icon ? <span className="btn-icon">{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
