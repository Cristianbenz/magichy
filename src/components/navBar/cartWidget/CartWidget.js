import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import "./cartWidget.css";

export default function CartWidget() {
  const { updateCant } = useCartContext()

  return (
    <Link to={"/cart"}>
        {(updateCant() === 0) ? null 
          :
          <div className="menu--button-size menu--button-bg">
            <img className="button--img-size" src="https://i.ibb.co/JB5gTPD/shopping-cart.png" alt="icono del carrito" />
            <span className="button--counter-size button--counter-position button--counter-bg">
              {updateCant()}
            </span>
          </div>
        }
    </Link>
  );
}
