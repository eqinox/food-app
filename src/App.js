import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [carShown, setCarShown] = useState(false);

  const showCartHandler = () => {
    setCarShown(true);
  };

  const hideCartHandler = () => {
    setCarShown(false);
  };

  return (
    <CartProvider>
      {carShown && <Cart onClose={hideCartHandler} />}
      <Header onCloseCart={hideCartHandler} onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
