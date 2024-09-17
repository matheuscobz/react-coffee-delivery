import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { CartPage } from "./components/CartPage";
import { CartProvider } from "./contexts/CartContext";
import { SucessPage } from "./components/SucessPage";

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/checkout" element={<CartPage />} />
          <Route path="/checkout/sucess" element={<SucessPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

