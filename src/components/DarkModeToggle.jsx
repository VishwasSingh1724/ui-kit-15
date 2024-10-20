import React, { useEffect, useRef } from 'react';

const DarkModeToggle = () => {
  const themeRef = useRef(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', themeRef.current);
    localStorage.setItem('theme', themeRef.current);
  }, []);

  const toggleTheme = () => {
    themeRef.current = themeRef.current === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', themeRef.current);
    localStorage.setItem('theme', themeRef.current);
  };

  return (
    <button onClick={toggleTheme}>
      Toggle to {themeRef.current === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default DarkModeToggle;
