import { apiGet, apiPost } from '../client.js';

export function loginRequest(payload) {
  return apiPost('/api/auth/login', payload);
}

export function registerRequest(payload) {
  return apiPost('/api/auth/register', payload);
}

export function fetchCurrentUser() {
  return apiGet('/api/auth/me');
}
