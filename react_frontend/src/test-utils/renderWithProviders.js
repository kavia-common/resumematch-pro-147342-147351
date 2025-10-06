import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

/**
 * Utility to render components with AuthProvider and a MemoryRouter
 * for tests that need routing and auth context.
 */
export function renderWithProviders(ui, { route = '/', initialEntries, authWrapper = true } = {}) {
  const Wrapper = ({ children }) => {
    const content = (
      <MemoryRouter initialEntries={initialEntries || [route]}>
        {children}
      </MemoryRouter>
    );
    // wrap with AuthProvider unless opt-out requested
    return authWrapper ? <AuthProvider>{content}</AuthProvider> : content;
  };
  return { Wrapper };
}

// PUBLIC_INTERFACE
export function withProviders(ui, options) {
  /** Helper that returns ui wrapped with providers for inline render usage. */
  const { Wrapper } = renderWithProviders(ui, options);
  return <Wrapper>{ui}</Wrapper>;
}
