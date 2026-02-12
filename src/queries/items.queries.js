import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '../api/endpoints/items.api.js';

export function useItemsQuery() {
  return useQuery({
    queryKey: ['items'],
    queryFn: fetchItems
  });
}

