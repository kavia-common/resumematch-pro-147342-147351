import React from 'react';

// PUBLIC_INTERFACE
export default function Profile() {
  /** User profile placeholder page. */
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"><strong>Profile</strong></div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <label>
                <span>Name</span>
                <input className="input" defaultValue="Ocean Pro User" />
              </label>
            </div>
            <div className="col">
              <label>
                <span>Email</span>
                <input className="input" defaultValue="you@example.com" />
              </label>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <button className="btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
