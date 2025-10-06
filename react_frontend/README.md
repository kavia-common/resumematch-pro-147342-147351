# React Frontend - ResumeMatch Pro

Environment setup:
1) Copy .env.example to .env and set:
   REACT_APP_API_BASE=http://localhost:3001

If not set, the frontend will default to http://localhost:3001.

API client:
- src/api/client.js reads process.env.REACT_APP_API_BASE with fallback to http://localhost:3001.
- Use setAuthToken(token) to attach the JWT to all requests:
  import client, { setAuthToken } from "./src/api/client";
  setAuthToken(jwt);

Authentication flow:
- After login/register, store the token securely (e.g., memory or httpOnly cookie depending on your strategy).
- Call setAuthToken(token) so subsequent API calls send Authorization: Bearer <token>.
- To logout, call setAuthToken(null) and clear stored token.

Development:
- Start backend first on the port configured for the API base.
- Start frontend with:
  npm start
