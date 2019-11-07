import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [values, setValues] = useDarkMode("false");
  const toggleMode = e => {
    e.preventDefault();
    setValues(!values);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={values ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
