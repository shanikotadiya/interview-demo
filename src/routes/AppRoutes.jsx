import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routesConfig.js';
import NotFound from '../components/errors/NotFound/NotFound.jsx';

const HomePage = lazy(() => import('../pages/Home/HomePage.jsx'));
const AboutPage = lazy(() => import('../pages/About/AboutPage.jsx'));
const LoginPage = lazy(() => import('../pages/Auth/Login/LoginPage.jsx'));
const RegisterPage = lazy(() => import('../pages/Auth/Register/RegisterPage.jsx'));
const DashboardPage = lazy(() => import('../pages/Dashboard/DashboardPage.jsx'));
const RequireAuth = lazy(() => import('./guards/RequireAuth.jsx'));

function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route element={<RequireAuth />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
