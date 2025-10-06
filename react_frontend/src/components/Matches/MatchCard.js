import React from 'react';

// PUBLIC_INTERFACE
export default function MatchCard({ title, company, score }) {
  /** A single job match card. */
  const color = score >= 80 ? '#16a34a' : score >= 60 ? '#f59e0b' : '#ef4444';

  return (
    <div className="card" role="article" aria-label={`${title} at ${company}`}>
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 700 }}>{title}</div>
          <div className="text-muted" style={{ fontSize: 12 }}>{company}</div>
        </div>
        <div className="badge" style={{ borderColor: color, color }} aria-label={`Match score ${score}`}>
          {score}
        </div>
      </div>
      <div className="card-body">
        <p className="text-muted" style={{ marginTop: 0 }}>
          High similarity in skills and experience. Consider tailoring for additional keywords.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn">View</button>
          <button className="btn btn-outline">Improve</button>
        </div>
      </div>
    </div>
  );
}
