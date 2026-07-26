import React from 'react';

export default function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'Home', label: '📌 Overview & Pattern' },
    { id: 'Papers', label: '📄 Question Papers' },
    { id: 'CS', label: '💻 CS/IS Syllabus (50%)' },
    { id: 'RM', label: '📊 RM Syllabus (50%)' },
    { id: 'Links', label: '🔗 Links & Guidelines' },
    { id: 'Notes', label: '📝 My Study Notes' },
  ];

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}