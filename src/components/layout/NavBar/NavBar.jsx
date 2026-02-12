import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig.js';
import { useAuthState, useLogout } from '../../../hooks/useAuth.js';
import './NavBar.scss';

function NavBar() {
  const { user } = useAuthState();
  const logout = useLogout();

  return (
    <nav className="app-nav">
      <Link className="app-link" to={ROUTES.HOME}>
        Home
      </Link>
      <Link className="app-link" to={ROUTES.ABOUT}>
        About
      </Link>
      <Link className="app-link" to={ROUTES.DASHBOARD}>
        Dashboard
      </Link>
      {!user && (
        <>
          <Link className="app-link" to={ROUTES.LOGIN}>
            Login
          </Link>
          <Link className="app-link" to={ROUTES.REGISTER}>
            Register
          </Link>
        </>
      )}
      {user && (
        <>
          <span className="pill">Hi, {user.name}</span>
          <button type="button" className="btn btn-ghost" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default NavBar;
