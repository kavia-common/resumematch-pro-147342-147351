import React from 'react';

// PUBLIC_INTERFACE
export default function Settings() {
  /** App settings placeholder page. */
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"><strong>Settings</strong></div>
        <div className="card-body">
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" /> Enable email notifications
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
            <input type="checkbox" defaultChecked /> Share anonymous usage data
          </label>
        </div>
      </div>
    </div>
  );
}
