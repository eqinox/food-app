import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [carShown, setCarShown] = useState(false);

  const showCartHandler = () => {
    setCarShown(true);
  };

  const hideCartHandler = () => {
    setCarShown(false);
  };

  return (
    <Fragment>
      {carShown && <Cart onClose={hideCartHandler} />}
      <Header onCloseCart={hideCartHandler} onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
