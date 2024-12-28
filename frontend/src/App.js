import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Route from "./routes/Route";
import Header from "./components/Header";
import { useState } from "react";
import { CartProvider } from "./pages/CartItems/CartItems";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Route />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
