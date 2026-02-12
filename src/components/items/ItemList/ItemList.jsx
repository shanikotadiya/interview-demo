import React from 'react';
import './ItemList.scss';

function ItemList({ items, isLoading, isError, errorMessage }) {
  if (isLoading) return <p className="muted">Loading items...</p>;
  if (isError) return <p className="error-text">{errorMessage}</p>;

  return (
    <ul className="list item-list">
      {items?.length ? (
        items.map((item) => <li key={item.id}>{item.text}</li>)
      ) : (
        <li className="muted">No items yet. Add one above.</li>
      )}
    </ul>
  );
}

export default ItemList;
