import React from 'react';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Shows summary of recent uploads, matches, and analysis at a glance. */
  const stats = [
    { label: 'Resumes', value: 3 },
    { label: 'Jobs', value: 12 },
    { label: 'Matches', value: 5 },
    { label: 'Avg ATS', value: '78%' },
  ];

  return (
    <div className="container">
      <div className="row">
        {stats.map((s) => (
          <div className="col" key={s.label}>
            <div className="card">
              <div className="card-header">
                <div style={{ fontWeight: 700 }}>{s.label}</div>
                <span className="badge" aria-hidden>Live</span>
              </div>
              <div className="card-body">
                <div style={{ fontSize: 28, fontWeight: 800 }}>{s.value}</div>
                <div className="text-muted" style={{ fontSize: 12 }}>Ocean Professional</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }} className="card">
        <div className="card-header">
          <div style={{ fontWeight: 700 }}>Recent Activity</div>
        </div>
        <div className="card-body">
          <ul>
            <li>Uploaded resume "Senior_Engineer.pdf"</li>
            <li>Added job "Backend Engineer - FinTech"</li>
            <li>New match found for "AI Engineer"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
