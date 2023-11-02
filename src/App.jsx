import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Explore from "./pages/Explore/Explore";
import ShoppingCart from "./pages/Cart/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="explore" element={<Explore />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
