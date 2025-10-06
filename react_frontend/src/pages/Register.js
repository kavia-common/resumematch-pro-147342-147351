import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// PUBLIC_INTERFACE
export default function Register() {
  /** Registration page with form validation. */
  const { register, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});

  if (isAuthenticated) return <Navigate to="/app/dashboard" replace />;

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const res = await register(form.email, form.password);
    if (res.success) navigate('/app/dashboard', { replace: true });
  };

  return (
    <div className="auth-wrapper">
      <section className="auth-card card" aria-label="Register form">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 800, fontSize: 20 }}>Create account</div>
            <div className="text-muted" style={{ fontSize: 13 }}>Start optimizing your resume</div>
          </div>
          <span className="badge" aria-hidden>New</span>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit} noValidate>
            <div style={{ display: 'grid', gap: 12 }}>
              <label>
                <span>Email</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-err' : undefined}
                  required
                />
                {errors.email && <div id="email-err" className="text-error" style={{ fontSize: 12 }}>{errors.email}</div>}
              </label>

              <label>
                <span>Password</span>
                <input
                  className="input"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'pass-err' : undefined}
                  required
                />
                {errors.password && <div id="pass-err" className="text-error" style={{ fontSize: 12 }}>{errors.password}</div>}
              </label>

              <label>
                <span>Confirm password</span>
                <input
                  className="input"
                  type="password"
                  name="confirm"
                  autoComplete="new-password"
                  value={form.confirm}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.confirm)}
                  aria-describedby={errors.confirm ? 'confirm-err' : undefined}
                  required
                />
                {errors.confirm && <div id="confirm-err" className="text-error" style={{ fontSize: 12 }}>{errors.confirm}</div>}
              </label>

              <button className="btn btn-secondary" type="submit" disabled={loading} aria-busy={loading}>
                {loading ? 'Creating…' : 'Create account'}
              </button>

              <div className="text-muted" style={{ fontSize: 14 }}>
                Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
