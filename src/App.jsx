import React from "react";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div>
      <h1>Welcome to Our Shop</h1>
      <Greetings name="Best Matcha ever" />
      <h2>Products</h2>
        <Products name="Matcha latte with Isuzu powder" price="$5" />
        <Products name="Matcha latte with Unkaku powder" price="$7" />
        <Products name="Matcha latte with Wako powder" price="$9" />
    </div>
  );
}

export default App;