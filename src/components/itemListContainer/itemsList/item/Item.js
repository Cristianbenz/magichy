import { Link } from "react-router-dom";
import Buttons from "../../../buttons/Buttons";
import "./item.css";

export default function Item({ img, title, stock, id }) {
  return (
    <article className="itemList--item-size itemList--item-border itemList--item-layout itemList--item-bg">
      <img className="item--img-size" src={img} alt={title} />
      <h3>{title}</h3>
      <Link className="item--button-text" to={`/detail/${id}`}>
        <Buttons type="primary" content="Ver detalles" />
      </Link>
      <span>Disponibles: {stock}</span>
    </article>
  );
}
