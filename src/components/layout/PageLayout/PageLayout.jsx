import React from 'react';
import Header from '../Header/Header.jsx';
import './PageLayout.scss';

function PageLayout({ children, showHeader = true }) {
  return (
    <div className="app-root">
      {showHeader && <Header />}
      <main className="app-main">
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}

export default PageLayout;
