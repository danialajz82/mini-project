import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./card";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Online Store</h1>
      <ProductList addToCart={addToCart} />
      <h2>Shopping Cart</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
