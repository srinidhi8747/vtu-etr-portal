import React from 'react';

export default function OverviewTab() {
  return (
    <div className="card">
      <h2>Examination Overview</h2>
      <p>
        The Visvesvaraya Technological University Eligibility Test for Research (VTU-ETR) qualifies candidates for admission into Ph.D. and M.S. (Research) degrees.
      </p>

      <h3>Key Exam Structure</h3>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Total Marks</strong></td>
              <td>100 Marks</td>
            </tr>
            <tr>
              <td><strong>Total Questions</strong></td>
              <td>100 Multiple Choice Questions (MCQs)</td>
            </tr>
            <tr>
              <td><strong>Duration</strong></td>
              <td>3 Hours (180 Minutes)</td>
            </tr>
            <tr>
              <td><strong>Marking Scheme</strong></td>
              <td>1 Mark per Question | <strong>NO Negative Marking</strong></td>
            </tr>
            <tr>
              <td><strong>Part A</strong></td>
              <td>50% (50 MCQs) - Research Methodology</td>
            </tr>
            <tr>
              <td><strong>Part B</strong></td>
              <td>50% (50 MCQs) - Computer Science & Engg / Information Science</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}