import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const newItem = prompt('Enter a new item:');
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  const handleRemove = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>My List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default List;
