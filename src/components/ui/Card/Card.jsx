import React from 'react';
import './Card.scss';

function Card({ children, title, subtitle, className = '' }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title && <h2 className="card-title">{title}</h2>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}

export default Card;
