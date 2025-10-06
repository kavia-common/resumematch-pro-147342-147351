import client, { getClient, setAuthToken } from './client';

describe('api client configuration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('getClient returns same axios instance', () => {
    expect(getClient()).toBe(client);
  });

  test('uses REACT_APP_API_BASE when defined and non-empty', async () => {
    process.env.REACT_APP_API_BASE = 'https://api.example.com';
    const { default: modClient } = await import('./client');
    expect(modClient.defaults.baseURL).toBe('https://api.example.com');
  });

  test('falls back to http://localhost:3001 when env not set', async () => {
    delete process.env.REACT_APP_API_BASE;
    const { default: modClient } = await import('./client');
    expect(modClient.defaults.baseURL).toBe('http://localhost:3001');
  });

  test('setAuthToken adds and removes Authorization header', () => {
    const c = getClient();
    setAuthToken('abc.123.token');
    expect(c.defaults.headers.common.Authorization).toBe('Bearer abc.123.token');

    setAuthToken(null);
    expect(c.defaults.headers.common.Authorization).toBeUndefined();
  });
});
