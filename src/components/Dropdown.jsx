import React from "react";

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
              
export default Dropdown;