import { API_BASE_URL, AUTH_TOKEN_KEY } from '../constants/config.js';

function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export async function apiGet(path) {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    const message = errorBody.message || 'Request failed';
    throw new Error(message);
  }

  return res.json();
}

export async function apiPost(path, body) {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    const message = errorBody.message || 'Request failed';
    throw new Error(message);
  }

  return res.json();
}

