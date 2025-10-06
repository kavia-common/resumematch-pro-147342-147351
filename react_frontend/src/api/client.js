import axios from "axios";

/**
 * Axios API client configured with baseURL from environment.
 * Falls back to http://localhost:3001 for local development.
 */
const baseURL =
  process.env.REACT_APP_API_BASE && process.env.REACT_APP_API_BASE.trim().length > 0
    ? process.env.REACT_APP_API_BASE
    : "http://localhost:3001";

const client = axios.create({
  baseURL,
});

// PUBLIC_INTERFACE
export function setAuthToken(token) {
  /** Set or clear the Authorization header for subsequent requests. */
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common.Authorization;
  }
}

// PUBLIC_INTERFACE
export function getClient() {
  /** Get the configured axios instance. */
  return client;
}

export default client;
