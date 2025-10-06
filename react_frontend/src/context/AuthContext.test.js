import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

// Helper component to surface context values in tests
function Probe() {
  const { token, isAuthenticated, loading, login, register, logout } = useAuth();
  return (
    <div>
      <div data-testid="token">{token || ''}</div>
      <div data-testid="auth">{isAuthenticated ? 'yes' : 'no'}</div>
      <div data-testid="loading">{loading ? 'yes' : 'no'}</div>
      <button onClick={() => login('u@example.com', 'secret')}>do-login</button>
      <button onClick={() => register('u@example.com', 'secret')}>do-register</button>
      <button onClick={logout}>do-logout</button>
    </div>
  );
}

beforeEach(() => {
  // isolate localStorage per test
  localStorage.clear();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('initial state reflects localStorage token', () => {
  localStorage.setItem('rm_token', 'existing.token.value');
  render(
    <AuthProvider>
      <Probe />
    </AuthProvider>
  );
  expect(screen.getByTestId('token')).toHaveTextContent('existing.token.value');
  expect(screen.getByTestId('auth')).toHaveTextContent('yes');
});

test('login sets token, updates localStorage and flags loading while pending', async () => {
  render(
    <AuthProvider>
      <Probe />
    </AuthProvider>
  );

  expect(screen.getByTestId('auth')).toHaveTextContent('no');
  // click login
  act(() => {
    screen.getByText('do-login').click();
  });

  // should be loading initially
  expect(screen.getByTestId('loading')).toHaveTextContent('yes');

  // advance timers for simulated async in login (400ms)
  await act(async () => {
    jest.advanceTimersByTime(450);
  });

  expect(screen.getByTestId('loading')).toHaveTextContent('no');
  expect(screen.getByTestId('auth')).toHaveTextContent('yes');
  expect(screen.getByTestId('token')).toHaveTextContent('demo.jwt.token');
  expect(localStorage.getItem('rm_token')).toBe('demo.jwt.token');
});

test('register behaves similar to login with token set', async () => {
  render(
    <AuthProvider>
      <Probe />
    </AuthProvider>
  );

  act(() => {
    screen.getByText('do-register').click();
  });

  // 600ms per implementation
  await act(async () => {
    jest.advanceTimersByTime(650);
  });

  expect(screen.getByTestId('auth')).toHaveTextContent('yes');
  expect(localStorage.getItem('rm_token')).toBe('demo.jwt.token');
});

test('logout clears token and localStorage', () => {
  localStorage.setItem('rm_token', 'existing');
  render(
    <AuthProvider>
      <Probe />
    </AuthProvider>
  );

  act(() => {
    screen.getByText('do-logout').click();
  });

  expect(screen.getByTestId('auth')).toHaveTextContent('no');
  expect(screen.getByTestId('token')).toHaveTextContent('');
  expect(localStorage.getItem('rm_token')).toBe(null);
});
