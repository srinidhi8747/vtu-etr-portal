import React from 'react';

export default function Header({ theme, toggleDarkMode }) {
  return (
    <header>
      <div class="header-container">
        <div class="header-text">
          <h1>VTU - Eligibility Test for Research</h1>
          <p>Ph.D. / M.S. (Research) Entrance Portal</p>
        </div>
        <button className="theme-btn" onClick={toggleDarkMode}>
          🌓 Mode
        </button>
      </div>
    </header>
  );
}