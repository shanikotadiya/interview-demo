import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes, ROUTES } from './routes/index.jsx';
import PageLayout from './components/layout/PageLayout/PageLayout.jsx';
import Loader from './components/ui/Loader/Loader.jsx';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== ROUTES.LOGIN && location.pathname !== ROUTES.REGISTER;

  return (
    <PageLayout showHeader={showHeader}>
      <Suspense fallback={<Loader text="Loading page..." />}>
        <AppRoutes />
      </Suspense>
    </PageLayout>
  );
}

export default App;
