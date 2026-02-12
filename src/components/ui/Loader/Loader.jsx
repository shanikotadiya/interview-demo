import React from 'react';
import './Loader.scss';

function Loader({ size = 'md', text, className = '' }) {
  return (
    <div className={`loader loader--${size} ${className}`.trim()} role="status" aria-label={text || 'Loading'}>
      <div className="loader__spinner" />
      {text && <span className="loader__text">{text}</span>}
    </div>
  );
}

export default Loader;
