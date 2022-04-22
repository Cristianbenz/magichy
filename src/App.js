import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import NavBar from "./components/navBar/NavBar";
import Index from "./pages/index";
import AboutUs from "./pages/aboutUs";
import Products from "./pages/index";
import FrequentQuestions from "./pages/frequentQuestions";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./pages/cart/cart";
import NoMatch from "./pages/notMatch/NoMatch";
import Footer from './components/footer/Footer'
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
