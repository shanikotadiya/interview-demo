import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig.js';
import { useLoginMutation } from '../../../mutations/auth.mutations.js';
import LoginBox from '../../../components/auth/LoginBox/LoginBox.jsx';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync, isPending, error, isError } = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

  async function handleSubmit(e) {
    e.preventDefault();
    await mutateAsync({ email, password });
    navigate(from, { replace: true });
  }

  return (
    <LoginBox
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
      isPending={isPending}
      errorMessage={isError ? error?.message || 'Login failed' : null}
    />
  );
}

export default LoginPage;
