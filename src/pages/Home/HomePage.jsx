import React, { useState } from 'react';
import { useItemsQuery } from '../../queries/items.queries.js';
import { useCreateItemMutation } from '../../mutations/items.mutations.js';
import Card from '../../components/ui/Card/Card.jsx';
import ItemForm from '../../components/items/ItemForm/ItemForm.jsx';
import ItemList from '../../components/items/ItemList/ItemList.jsx';
import './HomePage.scss';

function HomePage() {
  const [text, setText] = useState('');
  const { data: items, isLoading, isError, error } = useItemsQuery();
  const { mutateAsync, isPending } = useCreateItemMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    await mutateAsync({ text });
    setText('');
  }

  return (
    <Card
      title="Home"
      subtitle={
        <>
          This page uses <code>useQuery</code> to fetch items and{' '}
          <code>useMutation</code> to create new items.
        </>
      }
      className="home-page"
    >
      <ItemForm
        value={text}
        onChange={setText}
        onSubmit={handleSubmit}
        isPending={isPending}
      />
      <ItemList
        items={items}
        isLoading={isLoading}
        isError={isError}
        errorMessage={error?.message || 'Failed to load items'}
      />
    </Card>
  );
}

export default HomePage;
