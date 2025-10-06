import React from 'react';

// PUBLIC_INTERFACE
export default function ScoreCard({ score = 0 }) {
  /** Displays ATS score with visual emphasis. */
  const color = score >= 80 ? '#16a34a' : score >= 60 ? '#f59e0b' : '#ef4444';

  return (
    <div className="card" aria-label="ATS score">
      <div className="card-header">
        <strong>ATS Score</strong>
        <span className="badge" aria-hidden>Beta</span>
      </div>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-grid',
            placeItems: 'center',
            width: 160,
            height: 160,
            borderRadius: '999px',
            background: 'radial-gradient(circle at 70% 30%, rgba(37,99,235,0.1), rgba(37,99,235,0.02))',
            border: '6px solid rgba(37,99,235,0.15)',
            margin: 10,
          }}
          role="img"
          aria-label={`Score ${score} out of 100`}
        >
          <div style={{ fontSize: 48, fontWeight: 900, color }}>{score}</div>
          <div className="text-muted" style={{ fontSize: 12 }}>out of 100</div>
        </div>
      </div>
    </div>
  );
}
