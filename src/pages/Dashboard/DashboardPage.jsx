import React from 'react';
import { useAuthState } from '../../hooks/useAuth.js';
import { useCurrentUserQuery } from '../../queries/auth.queries.js';
import Loader from '../../components/ui/Loader/Loader.jsx';
import './DashboardPage.scss';

function DashboardPage() {
  const { token } = useAuthState();
  const { data, isLoading, isError, error } = useCurrentUserQuery();

  if (!token) {
    return (
      <section className="card dashboard-page">
        <h2 className="card-title">Dashboard</h2>
        <p className="card-subtitle">Please log in to see your profile.</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="card dashboard-page">
        <Loader text="Loading your profile..." />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="card dashboard-page">
        <h2 className="card-title">Dashboard</h2>
        <p className="error-text">
          {error?.message || 'Failed to load profile'}
        </p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="card dashboard-page">
        <h2 className="card-title">Dashboard</h2>
        <p className="card-subtitle">No profile data.</p>
      </section>
    );
  }

  return (
    <section className="card dashboard-page">
      <h2 className="card-title">Dashboard</h2>
      <p className="card-subtitle">Welcome, {data.name}!</p>
      <p className="dashboard-page__email">Email: {data.email}</p>
    </section>
  );
}

export default DashboardPage;

