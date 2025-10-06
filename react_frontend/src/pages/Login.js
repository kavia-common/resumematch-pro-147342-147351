import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// PUBLIC_INTERFACE
export default function Login() {
  /** Sign-in page with form validation and Ocean Professional styling. */
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/app/dashboard';

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  if (isAuthenticated) return <Navigate to={from} replace />;

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const res = await login(form.email, form.password);
    if (res.success) navigate('/app/dashboard', { replace: true });
  };

  return (
    <div className="auth-wrapper">
      <section className="auth-card card" aria-label="Login form">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 800, fontSize: 20 }}>Welcome back</div>
            <div className="text-muted" style={{ fontSize: 13 }}>Sign in to continue</div>
          </div>
          <span className="badge" aria-hidden>Secure</span>
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
                  autoComplete="current-password"
                  value={form.password}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'pass-err' : undefined}
                  required
                />
                {errors.password && <div id="pass-err" className="text-error" style={{ fontSize: 12 }}>{errors.password}</div>}
              </label>

              <button className="btn" type="submit" disabled={loading} aria-busy={loading}>
                {loading ? 'Signing in…' : 'Sign In'}
              </button>

              <div className="text-muted" style={{ fontSize: 14 }}>
                New here? <Link to="/register" className="text-primary">Create an account</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
