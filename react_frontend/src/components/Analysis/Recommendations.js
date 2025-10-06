import React from 'react';

// PUBLIC_INTERFACE
export default function Recommendations() {
  /** Lists suggestions for improving resume based on analysis. */
  const items = [
    { title: 'Add relevant keywords', detail: 'Include keywords found in the job description to improve matching.' },
    { title: 'Quantify achievements', detail: 'Use metrics to showcase impact (e.g., increased performance by 25%).' },
    { title: 'Simplify formatting', detail: 'Avoid complex layouts that may confuse ATS parsing.' },
  ];

  return (
    <div className="card" aria-label="Recommendations">
      <div className="card-header">
        <strong>Recommendations</strong>
      </div>
      <div className="card-body">
        <ul>
          {items.map((it) => (
            <li key={it.title} style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 600 }}>{it.title}</div>
              <div className="text-muted" style={{ fontSize: 13 }}>{it.detail}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
