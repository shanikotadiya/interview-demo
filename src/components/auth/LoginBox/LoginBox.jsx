import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig.js';
import './LoginBox.scss';

function LoginBox({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isPending,
  errorMessage,
  className = ''
}) {
  return (
    <section className={`card login-box ${className}`.trim()}>
      <h2 className="card-title">Login</h2>
      <p className="card-subtitle">Sign in to access your dashboard.</p>
      <form className="form-grid" onSubmit={onSubmit}>
        <div className="form-field">
          <label>Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button className="btn btn-primary" type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="muted">
        No account? <Link to={ROUTES.REGISTER}>Register</Link>
      </p>
    </section>
  );
}

export default LoginBox;
