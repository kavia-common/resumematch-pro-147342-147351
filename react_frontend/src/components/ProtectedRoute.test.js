import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';

function ProtectedPage() {
  return <div>Secret Content</div>;
}
function LoginPage() {
  return <div>Login Page</div>;
}

test('unauthenticated users are redirected to /login', () => {
  // Ensure not authenticated by clearing token
  localStorage.clear();

  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/app/secure']}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/app/secure"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  expect(screen.getByText('Login Page')).toBeInTheDocument();
  expect(screen.queryByText('Secret Content')).not.toBeInTheDocument();
});

test('authenticated users can access protected route', () => {
  localStorage.setItem('rm_token', 'demo.jwt.token');

  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/app/secure']}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/app/secure"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  expect(screen.getByText('Secret Content')).toBeInTheDocument();
});
