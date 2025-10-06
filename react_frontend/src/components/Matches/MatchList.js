import React from 'react';
import MatchCard from './MatchCard';

// PUBLIC_INTERFACE
export default function MatchList() {
  /** Displays a list of match cards. */
  const data = [
    { id: 1, title: 'AI Engineer', company: 'HealthTech Co', score: 84 },
    { id: 2, title: 'Backend Engineer', company: 'FinTech Inc', score: 76 },
    { id: 3, title: 'Fullstack Developer', company: 'SaaS Works', score: 68 },
  ];

  return (
    <div className="row">
      {data.map((d) => (
        <div className="col" key={d.id}>
          <MatchCard {...d} />
        </div>
      ))}
    </div>
  );
}
