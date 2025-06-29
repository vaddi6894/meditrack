import React from "react";
import "./Header.css";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>MediTrack</h1>
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
