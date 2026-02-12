import { useSelector } from 'react-redux';
import { useLogoutAction } from '../mutations/auth.mutations.js';

export function useAuthState() {
  return useSelector((state) => state.auth);
}

export function useLogout() {
  return useLogoutAction();
}

