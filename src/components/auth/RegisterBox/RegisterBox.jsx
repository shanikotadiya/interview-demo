import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig.js';
import './RegisterBox.scss';

function RegisterBox({
  name,
  email,
  password,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isPending,
  errorMessage,
  className = ''
}) {
  return (
    <section className={`card register-box ${className}`.trim()}>
      <h2 className="card-title">Register</h2>
      <p className="card-subtitle">Create an account to get started.</p>
      <form className="form-grid" onSubmit={onSubmit}>
        <div className="form-field">
          <label>Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
          />
        </div>
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
          {isPending ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p className="muted">
        Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
      </p>
    </section>
  );
}

export default RegisterBox;
