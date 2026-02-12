import React from 'react';
import './ItemForm.scss';

function ItemForm({ value, onChange, onSubmit, isPending }) {
  return (
    <form className="form-grid item-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label>New item</label>
        <input
          className="input"
          type="text"
          placeholder="New item text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Item'}
      </button>
    </form>
  );
}

export default ItemForm;
