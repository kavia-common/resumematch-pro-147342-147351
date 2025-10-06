import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar navigation component with main app sections.
 */
const Sidebar = () => {
  const navItems = [
    { to: '/app/dashboard', label: 'Dashboard', icon: '📊' },
    { to: '/app/upload', label: 'Upload', icon: '⬆️' },
    { to: '/app/jobs', label: 'Jobs', icon: '💼' },
    { to: '/app/matches', label: 'Matches', icon: '🤝' },
    { to: '/app/analysis', label: 'Analysis', icon: '🧠' },
    { to: '/app/profile', label: 'Profile', icon: '👤' },
    { to: '/app/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.brand}>
        <div style={styles.logo} aria-hidden>🌊</div>
        <div>
          <div style={styles.brandTitle}>ResumeMatch Pro</div>
          <div style={styles.brandSubtitle}>Ocean Professional</div>
        </div>
      </div>

      <nav aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {}),
            })}
          >
            <span aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div style={styles.footer}>
        <div style={styles.footerCard}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>Pro tips</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>
            Improve your ATS score by tailoring your resume to each job.
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100%',
    padding: 16,
    background: 'linear-gradient(180deg, rgba(37,99,235,0.08), rgba(255,255,255,0.8))',
    borderRight: '1px solid var(--border)',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    background: 'var(--grad-accent)',
    border: '1px solid var(--border)',
    marginBottom: 12,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 10,
    display: 'grid',
    placeItems: 'center',
    background: '#fff',
    boxShadow: 'var(--shadow)',
  },
  brandTitle: { fontWeight: 700, letterSpacing: 0.2 },
  brandSubtitle: { fontSize: 12, color: 'var(--muted)' },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    color: 'var(--text)',
    borderRadius: 10,
    margin: '4px 0',
    border: '1px solid transparent',
  },
  linkActive: {
    background: '#fff',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow)',
  },
  footer: { position: 'absolute', bottom: 16, left: 16, right: 16 },
  footerCard: {
    padding: 12,
    borderRadius: 12,
    border: '1px solid var(--border)',
    background: 'var(--grad-amber)',
  },
};

export default Sidebar;
