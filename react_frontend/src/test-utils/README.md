Testing utilities

- renderWithProviders.js: Provides helpers to wrap components under test with AuthProvider and MemoryRouter for routing and auth behavior tests.

Usage example:
import { render } from '@testing-library/react';
import { withProviders } from './renderWithProviders';
render(withProviders(<MyComponent />, { route: '/app/dashboard' }));
