import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";

import Index from "./pages/index";
import AboutUs from "./pages/aboutUs";
import Products from "./pages/index";
import FrequentQuestions from "./pages/frequentQuestions";
import NoMatch from "./pages/notMatch/NoMatch";

import Cart from "./pages/cart/cart";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Footer from './components/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function App() {
  return (
    <>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/category/:categoryName" element={<Products />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/frequentQuestions" element={<FrequentQuestions />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
      </CartContextProvider>
    </>
  );
}
