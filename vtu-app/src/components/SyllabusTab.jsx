import React, { useState, useEffect } from 'react';

export default function SyllabusTab({ title, prefix, units }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeUnits, setActiveUnits] = useState({});
  const [checkedUnits, setCheckedUnits] = useState({});

  useEffect(() => {
    const loadedProgress = {};
    units.forEach((u, i) => {
      const key = `${prefix}-u${i + 1}`;
      loadedProgress[key] = localStorage.getItem(key) === 'true';
    });
    setCheckedUnits(loadedProgress);
  }, [prefix, units]);

  const toggleAccordion = (index) => {
    setActiveUnits((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleAll = (expand) => {
    const newState = {};
    units.forEach((_, i) => {
      newState[i] = expand;
    });
    setActiveUnits(newState);
  };

  const handleCheckboxChange = (e, index) => {
    e.stopPropagation();
    const key = `${prefix}-u${index + 1}`;
    const val = e.target.checked;
    setCheckedUnits((prev) => ({ ...prev, [key]: val }));
    localStorage.setItem(key, val);
  };

  const completedCount = Object.values(checkedUnits).filter(Boolean).length;
  const percentage = Math.round((completedCount / units.length) * 100);

  const filteredUnits = units.filter(
    (u) =>
      u.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.topics.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card">
      <h2>{title}</h2>
      <hr style={{ marginBottom: '1.2rem', border: 0, borderTop: '1px solid var(--border-color)' }} />

      <div className="progress-section">
        <div className="progress-header">
          <span>Syllabus Completion</span>
          <span>
            {completedCount} of {units.length} Units Completed ({percentage}%)
          </span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>

      <div className="search-box-wrapper">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`🔍 Search topics or books in ${title}...`}
        />
        <button className="control-btn" onClick={() => toggleAll(true)}>
          📂 Expand All
        </button>
        <button className="control-btn" onClick={() => toggleAll(false)}>
          📁 Collapse All
        </button>
      </div>

      {filteredUnits.map((unit, index) => {
        const isExpanded = activeUnits[index] || searchTerm !== '';
        const key = `${prefix}-u${index + 1}`;

        return (
          <div key={index} className={`accordion-item ${isExpanded ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <div className="accordion-title-area">
                <input
                  type="checkbox"
                  className="unit-checkbox"
                  checked={!!checkedUnits[key]}
                  onChange={(e) => handleCheckboxChange(e, index)}
                  title="Mark as Completed"
                />
                <span>{unit.title}</span>
              </div>
              <span className="accordion-icon">►</span>
            </div>
            <div className="accordion-content">
              <p>
                <strong>Detailed Topics:</strong> {unit.topics}
              </p>
              <div className="reference-box">
                <span className="ref-title">📖 Reference Book(s):</span>
                {Array.isArray(unit.reference) ? (
                  <ol>
                    {unit.reference.map((ref, rIdx) => (
                      <li key={rIdx}>{ref}</li>
                    ))}
                  </ol>
                ) : (
                  <div>{unit.reference}</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}