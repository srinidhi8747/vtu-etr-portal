import React, { useState, useEffect } from 'react';

export default function StudyNotesTab() {
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('✓ All changes saved');

  useEffect(() => {
    const saved = localStorage.getItem('vtu_etr_user_notes');
    if (saved) setNotes(saved);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setNotes(val);
    setStatus('Saving...');
    localStorage.setItem('vtu_etr_user_notes', val);
    setTimeout(() => {
      setStatus('✓ All changes saved');
    }, 400);
  };

  const copyNotes = () => {
    navigator.clipboard.writeText(notes);
    alert('Notes copied to clipboard!');
  };

  const clearNotes = () => {
    if (window.confirm('Are you sure you want to clear your saved notes?')) {
      setNotes('');
      localStorage.removeItem('vtu_etr_user_notes');
      setStatus('Notes cleared');
    }
  };

  return (
    <div className="card">
      <h2>Custom Study Notes & Quick Notepad</h2>
      <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
        Type your personal quick formulas, key concepts, or reminders below. Anything typed here is <strong>automatically saved</strong> locally on your device.
      </p>

      <textarea
        className="notepad-textarea"
        value={notes}
        onChange={handleChange}
        placeholder="Type your personal formulas, weak areas, or revision points here..."
      ></textarea>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span className="notepad-status">{status}</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="control-btn" onClick={copyNotes}>📋 Copy Notes</button>
          <button className="control-btn" onClick={clearNotes}>🗑️ Clear</button>
        </div>
      </div>
    </div>
  );
}