import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders dashboard stats and recent activity', () => {
  render(<Dashboard />);

  expect(screen.getByText(/Resumes/i)).toBeInTheDocument();
  expect(screen.getByText(/Jobs/i)).toBeInTheDocument();
  expect(screen.getByText(/Matches/i)).toBeInTheDocument();
  expect(screen.getByText(/Recent Activity/i)).toBeInTheDocument();
});
