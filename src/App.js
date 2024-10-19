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
    return (
      <div className="tooltip-container">
        {children}
        <div className={`tooltip tooltip-${position}`}>
          {content}
        </div>
      </div>
    );
  };
const LoadingSpinner =({size=40,color='dodgerblue'})=>{
  return(
    <div
    className="loading-spinner"
    style={{
      width:size,
      height:size,
      border:`4px solid ${color}`,
      borderTop:`4px solid transparent`
    }}
    >

    </div>
  )
}


const Card = ({ title, image, children }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="Card" className="card-img" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
};


const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};


const Dropdown = ({ options, onSelect, label }) => {
  let dropdownRef = React.createRef();

  const handleSelect = (value) => {
    onSelect(value);
    dropdownRef.current.style.display = 'none'; // Hide dropdown after selection
  };

  const toggleDropdown = () => {
    const dropdown = dropdownRef.current;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {label}
      </button>
      <ul ref={dropdownRef} className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};


const Alert = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}


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

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          activeTab === tab.id && <div key={tab.id} className="tab-content">{tab.content}</div>
        ))}
      </div>
    </div>
  );
};

const Badge = ({ text, variant = 'primary' }) => {
  return (
    <span className={`badge badge-${variant}`}>
      {text}
    </span>
  );
};


export  {Button ,Modal,Tooltip,Table,DarkModeToggle,LoadingSpinner,Card,Dropdown,Accordion,Tabs,Input,Badge,Alert};