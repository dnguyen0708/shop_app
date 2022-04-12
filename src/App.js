import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { checkIfItemAlreadyInCart, getTotalNumOfItems } from './components/Item';
function App() {


  const [cart, setCart] = useState([]);
  const [noOfItems, setNoOfItems] = useState(0);

  function updateCart(items) {
    setCart([...items]);
  }

  function addToCart(item) {
    if (checkIfItemAlreadyInCart(item, cart)) {
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }
  }

  useEffect(() => {
    setNoOfItems(getTotalNumOfItems(cart));
  }, [cart])
  return (
    <div className="App">
      <BrowserRouter>
        <Nav items={noOfItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart items={cart} updateCart={updateCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
