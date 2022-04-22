import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import CartList from "../../components/cartList/CartList";
import Buttons from "../../components/buttons/Buttons";
import "./cart.css";

export default function Cart() {
  const { cartList } = useCartContext();

  return JSON.stringify(cartList) === "[]" ? (
    <>
      <h1 className="noItemsH2-text">Todavía no hay ítems en tu carrito</h1>
      <img className="noItemsImg-size noItemsImg-position" src="https://i.ibb.co/xh0DH6j/carrito-Vacio.png" alt="imagen de aviso" />
      <Link to={"/"}>
        <Buttons
          type={"primary"}
          content={"Ir a Comprar"}
        />
      </Link>
    </>
  ) : (
    <div className="cart-layout">
      <CartList />
    </div>
  );
}
