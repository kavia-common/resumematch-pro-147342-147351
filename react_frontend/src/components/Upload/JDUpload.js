import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function JDUpload() {
  /** Job description text/file upload placeholder. */
  const [jd, setJd] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!jd.trim()) return setStatus('Please paste a job description');
    setStatus('Submitting...');
    await new Promise((r) => setTimeout(r, 700));
    setStatus('Job description submitted (placeholder)');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Job Description</span>
        <textarea
          className="input"
          rows={8}
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder="Paste job description here..."
        />
      </label>
      <div style={{ marginTop: 12 }}>
        <button className="btn btn-secondary" type="submit">Submit JD</button>
        {status && <div className="text-muted" style={{ marginTop: 8 }}>{status}</div>}
      </div>
    </form>
  );
}
