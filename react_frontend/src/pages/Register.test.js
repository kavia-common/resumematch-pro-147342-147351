import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Register from './Register';

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

function setup() {
  return render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/register']}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/app/dashboard" element={<DashboardProbe />} />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );
}

test('validation works and shows messages', () => {
  setup();

  fireEvent.click(screen.getByRole('button', { name: /create account/i }));

  expect(screen.getByText(/enter a valid email/i)).toBeInTheDocument();
  expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
  expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
});

test('successful register stores token and navigates to dashboard', async () => {
  setup();

  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'new@example.com' } });
  fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'secret1' } });
  fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'secret1' } });

  fireEvent.click(screen.getByRole('button', { name: /create account/i }));

  // loading
  expect(screen.getByRole('button', { name: /creating/i })).toBeInTheDocument();

  await act(async () => {
    jest.advanceTimersByTime(700);
  });

  expect(localStorage.getItem('rm_token')).toBe('demo.jwt.token');
  expect(screen.getByText('Dashboard Home')).toBeInTheDocument();
});
