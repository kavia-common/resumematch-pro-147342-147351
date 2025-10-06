import React, { useState } from 'react';
import ResumeUpload from '../components/Upload/ResumeUpload';
import JDUpload from '../components/Upload/JDUpload';

// PUBLIC_INTERFACE
export default function Upload() {
  /** Upload center for Resume and Job Description with tabbed UI. */
  const [tab, setTab] = useState('resume');

  return (
    <div className="container">
      <div className="card">
        <div className="card-header" role="tablist" aria-label="Upload tabs">
          <div style={{ fontWeight: 700 }}>Upload Center</div>
          <div className="tabs" role="tablist" aria-label="Upload types">
            <button
              className={`tab ${tab === 'resume' ? 'active' : ''}`}
              role="tab"
              aria-selected={tab === 'resume'}
              onClick={() => setTab('resume')}
            >
              Resume
            </button>
            <button
              className={`tab ${tab === 'jd' ? 'active' : ''}`}
              role="tab"
              aria-selected={tab === 'jd'}
              onClick={() => setTab('jd')}
            >
              Job Description
            </button>
          </div>
        </div>
        <div className="card-body">
          {tab === 'resume' ? <ResumeUpload /> : <JDUpload />}
        </div>
      </div>
    </div>
  );
}
