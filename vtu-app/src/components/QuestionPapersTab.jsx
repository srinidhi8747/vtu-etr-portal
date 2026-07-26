import React, { useState } from 'react';

export default function QuestionPapersTab() {
  const [selectedPdf, setSelectedPdf] = useState('Documents/Jan-2025.pdf');

  const papers = [
    { title: 'Jan 2025 Paper', file: 'Documents/Jan-2025.pdf', short: 'Jan 2025' },
    { title: 'Oct 2025 Paper', file: 'Documents/Oct-2025.pdf', short: 'Oct 2025' },
    { title: 'May 2024 Paper', file: 'Documents/May – 2024.pdf', short: 'May 2024' },
    { title: 'August 2023 Paper', file: 'Documents/August – 2023.pdf', short: 'Aug 2023' },
    { title: 'November 2022 Paper', file: 'Documents/Nov-2022.pdf', short: 'Nov 2022' },
  ];

  return (
    <>
      <div className="card">
        <h2>Previous Years Question Papers</h2>
        <p style={{ fontSize: '0.9rem' }}>Tap below to view or download previous VTU-ETR papers directly:</p>

        <div className="pdf-grid">
          {papers.map((p, idx) => (
            <div key={idx} className="pdf-card">
              <h4>{p.title}</h4>
              <p>Versions A, B, C, D + Answer Key</p>
              <div className="btn-group">
                <a href={p.file} target="_blank" rel="noreferrer" className="btn">View</a>
                <a href={p.file} download className="btn btn-outline">Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Embedded Paper Viewer</h2>
        <div className="pdf-selector-buttons">
          {papers.map((p, idx) => (
            <button key={idx} className="btn" onClick={() => setSelectedPdf(p.file)}>
              {p.short}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: '0.5rem', textAlign: 'right' }}>
          <a
            href={selectedPdf}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}
          >
            ↗ Open Full PDF in New Tab
          </a>
        </div>

        <div className="iframe-container">
          <iframe src={selectedPdf} title="PDF Viewer"></iframe>
        </div>
      </div>

      <div className="card">
        <h2>High-Yield Repeated Questions</h2>
        
        <div className="question-box">
          <p><strong>1. Research Methodology: Type-I Error</strong></p>
          <p><em>Question:</em> Type-I error occurs when:</p>
          <p className="answer">Answer: Null Hypothesis is rejected even if it is true (H₀ is true)</p>
        </div>

        <div className="question-box">
          <p><strong>2. Data Structures: BST Node Count</strong></p>
          <p><em>Question:</em> BST insertion order: <code>50, 15, 62, 5, 20, 58, 91, 3, 8, 37, 60, 24</code>. Left & Right subtrees node count:</p>
          <p className="answer">Answer: (7, 4)</p>
        </div>

        <div className="question-box">
          <p><strong>3. Operating Systems: Thrashing</strong></p>
          <p><em>Question:</em> Thrashing in OS memory management occurs when:</p>
          <p className="answer">Answer: Processes spend more time page swapping/paging than executing code</p>
        </div>

        <div className="question-box">
          <p><strong>4. Computer Networks: Presentation Layer</strong></p>
          <p><em>Question:</em> Which OSI layer handles data compression, encryption, and formatting?</p>
          <p className="answer">Answer: Presentation Layer (Layer 6)</p>
        </div>

        <div className="question-box">
          <p><strong>5. Research Methodology: Type-II Error</strong></p>
          <p><em>Question:</em> Type-II error (β) occurs when:</p>
          <p className="answer">Answer: Failing to reject (accepting) a false Null Hypothesis (H₀ is false)</p>
        </div>

        <div className="question-box">
          <p><strong>6. Database Systems: Normalization</strong></p>
          <p><em>Question:</em> A relation table is in 3NF if it is in 2NF and has no:</p>
          <p className="answer">Answer: Transitive Dependencies</p>
        </div>

        <div className="question-box">
          <p><strong>7. Design & Analysis of Algorithms: Dijkstra's Algorithm</strong></p>
          <p><em>Question:</em> Dijkstra's Single Source Shortest Path fails when graph edges have:</p>
          <p className="answer">Answer: Negative weights or negative cycles</p>
        </div>

        <div className="question-box">
          <p><strong>8. Software Engineering: Coupling vs Cohesion</strong></p>
          <p><em>Question:</em> In good software modular architecture, software modules should have:</p>
          <p className="answer">Answer: High Cohesion and Low Coupling</p>
        </div>

        <div className="question-box">
          <p><strong>9. Research Methodology: Sampling Technique</strong></p>
          <p><em>Question:</em> Snowball sampling is categorized under which type of sampling method?</p>
          <p className="answer">Answer: Non-Probability Sampling</p>
        </div>

        <div className="question-box">
          <p><strong>10. Computer Organization: Cache Memory Alignment</strong></p>
          <p><em>Question:</em> Principle of locality of reference is used to justify the presence of:</p>
          <p className="answer">Answer: Cache Memory</p>
        </div>

        <div className="question-box">
          <p><strong>11. Intellectual Property Rights: Patent Duration</strong></p>
          <p><em>Question:</em> What is the standard term duration of a granted Patent in India from filing date?</p>
          <p className="answer">Answer: 20 Years</p>
        </div>

        <div className="question-box">
          <p><strong>12. Discrete Mathematics: Handshaking Lemma</strong></p>
          <p><em>Question:</em> In an undirected graph, the sum of degrees of all vertices equals:</p>
          <p className="answer">Answer: Twice the total number of edges (2 × |E|)</p>
        </div>
      </div>
    </>
  );
}