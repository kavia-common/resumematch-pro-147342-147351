import React from 'react';
import ScoreCard from '../components/Analysis/ScoreCard';
import Recommendations from '../components/Analysis/Recommendations';

// PUBLIC_INTERFACE
export default function Analysis() {
  /** ATS score and improvement suggestions placeholder. */
  return (
    <div className="container">
      <div className="row">
        <div className="col"><ScoreCard score={78} /></div>
        <div className="col"><Recommendations /></div>
      </div>
    </div>
  );
}
