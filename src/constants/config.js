// App and API config – use env in production (e.g. process.env.REACT_APP_API_URL)
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const APP_NAME = 'Interview Demo';

export const AUTH_TOKEN_KEY = 'auth_token';
