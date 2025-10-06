import React from 'react';

// PUBLIC_INTERFACE
export default function JobBoard() {
  /** Placeholder job board to list and add/edit jobs. */
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div style={{ fontWeight: 700 }}>Jobs</div>
          <button className="btn">Add Job</button>
        </div>
        <div className="card-body">
          <ul>
            <li>AI Engineer - HealthTech</li>
            <li>Backend Engineer - FinTech</li>
            <li>Fullstack Developer - SaaS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
