import { apiGet, apiPost } from '../client.js';

export function fetchItems() {
  return apiGet('/api/items');
}

export function createItem(payload) {
  return apiPost('/api/items', payload);
}
