import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

test('renders primary navigation items', () => {
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );

  const items = ['Dashboard', 'Upload', 'Jobs', 'Matches', 'Analysis', 'Profile', 'Settings'];
  for (const label of items) {
    expect(screen.getByText(label)).toBeInTheDocument();
  }

  // brand presence
  expect(screen.getByText('ResumeMatch Pro')).toBeInTheDocument();
  expect(screen.getByText('Ocean Professional')).toBeInTheDocument();
});
