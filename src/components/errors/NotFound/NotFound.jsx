import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig.js';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to={ROUTES.HOME} className="not-found__link">
          Back to Home
        </Link>
      </div>
      <div className="not-found__bg" aria-hidden="true">
        404
      </div>
    </div>
  );
}

export default NotFound;
