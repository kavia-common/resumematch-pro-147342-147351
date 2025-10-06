import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function ResumeUpload() {
  /** Resume file upload placeholder. */
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setStatus('Please select a file');
    // Placeholder - integrate with backend later
    setStatus('Uploading...');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Upload complete (placeholder)');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <label>
            <span>Resume (PDF or DOCX)</span>
            <input
              className="input"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn" type="submit">Upload Resume</button>
        {status && <div className="text-muted" style={{ marginTop: 8 }}>{status}</div>}
      </div>
    </form>
  );
}
