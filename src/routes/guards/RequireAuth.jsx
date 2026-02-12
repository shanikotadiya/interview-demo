import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '../routesConfig.js';
import { AUTH_TOKEN_KEY } from '../../constants/config.js';
import { useAuthState } from '../../hooks/useAuth.js';
import { useCurrentUserQuery } from '../../queries/auth.queries.js';
import Loader from '../../components/ui/Loader/Loader.jsx';

function RequireAuth() {
  const location = useLocation();
  const { token } = useAuthState();
  const { isLoading, isError } = useCurrentUserQuery();

  if (!token) {
    return (
      <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
    );
  }

  if (isLoading) {
    return <Loader text="Checking authentication..." />;
  }

  if (isError) {
    return (
      <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
}

export default RequireAuth;

