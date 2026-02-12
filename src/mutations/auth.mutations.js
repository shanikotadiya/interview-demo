import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { loginRequest, registerRequest } from '../api/endpoints/auth.api.js';
import { setCredentials, clearAuth } from '../redux/slices/authSlice.js';
import { AUTH_TOKEN_KEY } from '../constants/config.js';

export function useLoginMutation() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (payload) => {
      return loginRequest(payload);
    },
    onSuccess: (data) => {
      const { user, token } = data;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      dispatch(setCredentials({ user, token }));
    }
  });
}

export function useRegisterMutation() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (payload) => {
      return registerRequest(payload);
    },
    onSuccess: (data) => {
      const { user, token } = data;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      dispatch(setCredentials({ user, token }));
    }
  });
}

export function useLogoutAction() {
  const dispatch = useDispatch();

  return () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    dispatch(clearAuth());
  };
}

