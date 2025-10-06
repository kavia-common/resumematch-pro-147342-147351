import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from './Login';

function DashboardProbe() {
  return <div>Dashboard Home</div>;
}

beforeEach(() => {
  localStorage.clear();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

function setup(initialEntries = ['/login']) {
  return render(
    <AuthProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/app/dashboard" element={<DashboardProbe />} />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );
}

test('shows validation errors for invalid inputs', () => {
  setup();

  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

  expect(screen.getByText(/enter a valid email/i)).toBeInTheDocument();
  expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
});

test('successful login stores token and navigates to dashboard', async () => {
  setup();

  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'you@example.com' } });
  fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'secret1' } });

  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

  // progress state
  expect(screen.getByRole('button', { name: /signing in/i })).toBeInTheDocument();

  await act(async () => {
    jest.advanceTimersByTime(500);
  });

  expect(localStorage.getItem('rm_token')).toBe('demo.jwt.token');
  expect(screen.getByText('Dashboard Home')).toBeInTheDocument();
});
