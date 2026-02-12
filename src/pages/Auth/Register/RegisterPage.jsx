import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesConfig.js';
import { useRegisterMutation } from '../../../mutations/auth.mutations.js';
import RegisterBox from '../../../components/auth/RegisterBox/RegisterBox.jsx';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync, isPending, error, isError } = useRegisterMutation();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await mutateAsync({ name, email, password });
    navigate(ROUTES.DASHBOARD, { replace: true });
  }

  return (
    <RegisterBox
      name={name}
      email={email}
      password={password}
      onNameChange={setName}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
      isPending={isPending}
      errorMessage={isError ? error?.message || 'Registration failed' : null}
    />
  );
}

export default RegisterPage;
