import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createItem } from '../api/endpoints/items.api.js';

export function useCreateItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    }
  });
}

