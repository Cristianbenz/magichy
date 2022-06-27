import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/cartContext";
import Buttons from "../buttons/Buttons";
import {Notification} from "../notification/Notification";
import "./buyForm.css";

export default function BuyForm() {
  const { cartList, updateTotalPrice } = useCartContext();
  const [formError, setFormError] = useState('')
  const [orderId, setOrderId] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    method: "",
  });

  function handleInput(evt) {
    const NAME = evt.target.name;
    const VALUE = evt.target.value;
    setFields({
      ...fields,
      [NAME]: VALUE,
    });
  }

  function makeOrder() {
    const DB = getFirestore();
    const ORDER_COLLECTION = collection(DB, "orders");
    if (
      fields.name !== "" &&
      fields.email !== "" &&
      fields.email.includes("@") &&
      fields.method !== ""
    ) {
      const ORDER = {
        user: {
          ...fields,
        },
        items: cartList.map((lib) => {
          return {
            id: lib.id,
            title: lib.title,
            cant: lib.cant,
            price: lib.price,
          };
        }),
        total: updateTotalPrice(),
      };
      addDoc(ORDER_COLLECTION, ORDER)
        .then((order) => setOrderId(order.id))
        .catch(() => buyError('La orden no pudo ser procesada, por favor intente mas tarde'));
    } else {
      buyError('Llene correctamente todos los campos con *');
    }
  }

  const buyError = (info) => {
    setFormError(info)
    setFields({
      name: "",
      email: "",
      phone: "",
      method: fields.method,
    })
    setTimeout(() => {
      setFormError('')
    }, 3000);
  }

  return (
    <>
      <section className="buyForm-height buyForm-position buyForm-bg buyForm-layout">
        <label className="buyForm--label--layout buyForm--label-text">
          Nombre*:
          <input
            className="label--buyInput-border label--buyInput-text label--buyInput-bg "
            type={"text"}
            name={"name"}
            onChange={handleInput}
            value={fields.name}
          />
        </label>
        <label className="buyForm--label--layout buyForm--label-text">
          Email*:
          <input
            className="label--buyInput-border label--buyInput-text label--buyInput-bg"
            type={"email"}
            name={"email"}
            onChange={handleInput}
            value={fields.email}
          />
        </label>
        <label className="buyForm--label--layout buyForm--label-text">
          Cel:
          <input
            className="label--buyInput-border label--buyInput-text label--buyInput-bg"
            type={"number"}
            name={"phone"}
            onChange={handleInput}
            value={fields.phone}
          />
        </label>
        <div>
          <label className="buyForm--label-text buyForm--radio--margin">
            Efectivo*
            <input
              type={"radio"}
              name={"method"}
              value={"Efectivo"}
              onChange={handleInput}
            />
          </label>
          <label className="buyForm--label-text buyForm--radio--margin">
            MercadoPago*
            <input
              type={"radio"}
              name={"method"}
              value={"MercadoPago"}
              onChange={handleInput}
            />
          </label>
        </div>
        <Buttons type={"primary"} content={"Finalizar"} action={makeOrder} />
      </section>
      {(orderId !== "") && (
        <section className="orderModal--size orderModal--position orderModal--bg">
        <Buttons type={"secondary"} content={'x'} action={() => setOrderId("")} />
        <h2 className="orderModal--h2-text">
          Gracias {fields.name} por confiar en nosotros
        </h2>
        <p className="orderModal--p-text">Su identificador de orden es: {orderId}</p>
      </section>
      )}

      { (formError === '' ) ? null : <Notification type={'error'} text={formError} /> }
      
    </>
  );
}
