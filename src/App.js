import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'; 

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



const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  };

  const DarkModeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
    useEffect(() => {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    return (
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    );
  };


  
const Table = ({ data, columns, sortByColumn }) => {
    const [sortCol, setSortCol] = useState(null);
  
    const handleSort = (col) => {
      setSortCol(col);
      if (sortByColumn) {
        sortByColumn(col);
      }
    };
  
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} onClick={() => handleSort(col)}>
                {col} {sortCol === col ? '▼' : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


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


export  {Button ,Modal,Tooltip,Table,DarkModeToggle};