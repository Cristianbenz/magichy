import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import Buttons from "../../components/buttons/Buttons";
import BuyForm from "../buyForm/BuyForm";
import "./cartList.css";

export default function CartList() {
  const { cartList, updateTotalPrice, clearCart, deleteItem } = useCartContext();
  const [buy, setBuy] = useState(false);

  return (
    <>
      <section className="cartList-bg cartList-layout">
        <ul>
          {cartList.map((book) => (
            <li key={book.id} className="list--listItem-layout">
              <img
                className="listItem--img-size"
                src={book.cover}
                alt={`portada de ${book.title}`}
              />
              <div>
                <p>
                  <b>{book.title}</b>
                </p>
                <p>Unidades: {book.cant}</p>
                <p>Precio: ${book.price * book.cant}</p>
                <Buttons
                  type={"secondary"}
                  content={"Borrar ítem"}
                  action={() => deleteItem(book.id)}
                />
              </div>
            </li>
          ))}
        </ul>
        <Buttons type={"primary"} content={"Borrar todo"} action={clearCart} />
      </section>
      {buy ? (
        <BuyForm />
      ) : (
        <section className="cartList--total-height cartList--total-bg ">
          <article className="total--price-bg total--price-height total--price-layout total--price-text">
            Total: <span>${updateTotalPrice()}</span>
          </article>
          <Buttons
            type={"primary"}
            content={"Proceder a Comprar"}
            action={() => setBuy(true)}
          />
        </section>
      )}
    </>
  );
}
