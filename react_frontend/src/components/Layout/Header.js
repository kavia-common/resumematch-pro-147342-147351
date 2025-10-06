import React from 'react';
import { useAuth } from '../../context/AuthContext';

/**
 * Top header with search placeholder and account menu.
 */
const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div style={styles.header}>
      <div style={styles.left}>
        <button aria-label="Toggle menu" title="Menu" style={styles.iconBtn} className="hide-mobile">
          ☰
        </button>
        <div aria-hidden style={styles.title}>Dashboard</div>
      </div>

      <div style={styles.right}>
        <div style={styles.search} role="search">
          <span aria-hidden>🔎</span>
          <input
            aria-label="Search"
            placeholder="Search jobs, resumes, insights..."
            style={styles.searchInput}
          />
        </div>

        {isAuthenticated && (
          <div style={styles.account}>
            <div style={styles.avatar} aria-hidden>OP</div>
            <div className="hide-mobile" style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Signed in</div>
              <div style={{ fontWeight: 600 }}>you@example.com</div>
            </div>
            <button className="btn btn-outline" onClick={logout} style={{ marginLeft: 8 }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  header: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    background: 'var(--surface)',
    borderBottom: '1px solid var(--border)',
  },
  left: { display: 'flex', alignItems: 'center', gap: 12 },
  right: { display: 'flex', alignItems: 'center', gap: 12 },
  title: { fontWeight: 700 },
  iconBtn: {
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '6px 10px',
    background: '#fff',
    cursor: 'pointer',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    border: '1px solid var(--border)',
    borderRadius: 10,
    background: '#fff',
    minWidth: 240,
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: 200,
  },
  account: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: 4, borderRadius: 12, background: 'var(--grad-surface)',
    border: '1px solid var(--border)',
  },
  avatar: {
    width: 36, height: 36, borderRadius: 10, display: 'grid', placeItems: 'center',
    background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(245,158,11,0.1))',
    fontWeight: 700,
  },
};

export default Header;
