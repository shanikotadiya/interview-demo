import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../api/endpoints/auth.api.js';
import { setUser } from '../redux/slices/authSlice.js';

export function useAuthState() {
  return useSelector((state) => state.auth);
}

export function useCurrentUserQuery() {
  const dispatch = useDispatch();
  const { token } = useAuthState();

  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const data = await fetchCurrentUser();
      dispatch(setUser(data));
      return data;
    },
    enabled: !!token
  });
}

