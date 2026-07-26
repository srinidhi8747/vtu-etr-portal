import React from 'react';

export default function QuickLinksTab() {
  return (
    <div className="card">
      <h2>Official Quick Links & University Guidelines</h2>
      <hr style={{ marginBottom: '1.2rem', border: 0, borderTop: '1px solid var(--border-color)' }} />

      <a href="https://vtu.ac.in/" target="_blank" rel="noreferrer" className="link-card">
        <div>
          <div className="link-title">🌐 Visvesvaraya Technological University (VTU Official)</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Main official portal for circulars, notifications, and university announcements.</div>
        </div>
        <span style={{ fontWeight: 'bold', color: 'var(--secondary-color)' }}>↗ Visit</span>
      </a>

      <a href="https://vtu.ac.in/en/category/ph-d-notifications/" target="_blank" rel="noreferrer" className="link-card">
        <div>
          <div className="link-title">📢 VTU Ph.D. & Research Official Notifications</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Official research center circulars, viva schedules, and entrance exam updates.</div>
        </div>
        <span style={{ fontWeight: 'bold', color: 'var(--secondary-color)' }}>↗ Visit</span>
      </a>

      <h3>Important Examination Guidelines</h3>
      <div style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
        <ul>
          <li><strong>Minimum Qualifying Score:</strong> Candidates must score at least <strong>50% aggregate marks</strong> in the VTU-ETR entrance exam to qualify for the interview phase.</li>
          <li><strong>Part A & Part B Balance:</strong> The paper is divided equally into 50 MCQs for Research Methodology and 50 MCQs for Computer Science / Information Science.</li>
          <li><strong>Negative Marking:</strong> There is <strong>NO negative marking</strong> for incorrect answers. Candidates are encouraged to attempt all 100 questions.</li>
          <li><strong>Interview & Selection:</strong> Qualified candidates are called for a pre-registration interview where they present their broad research interest domain before the Ph.D. committee.</li>
        </ul>
      </div>
    </div>
  );
}