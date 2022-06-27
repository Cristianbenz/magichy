import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../buttons/Buttons";
import {Notification} from "../../notification/Notification";
import './itemCounter.css'

export default function ItemCount ({ id, cover, title, stock, price, initial, addOn }) {
  const [count, setCount] = useState(initial);
  const [unitPrice, setunitPrice] = useState(price);
  const [toCart, setToCart] = useState(false);
  const [addInactive, setAddInactive] = useState(false)

  useEffect( () => {
    setunitPrice( price * count );
  }, [price, count] )

  useEffect( () => {
    if(stock === 0 ){
      setAddInactive(true)
    } else {
      return
    }
  }, [stock])
  
  function handleCountLess () {
    switch (count){
      case 1:
        return setCount(1);
      default:
        return setCount(count - 1)
        
    }
    
  }

  function handleCountAdd () {
    switch (count){
      case stock:
        return setCount(Number(stock));
      default:
        return setCount(count + 1)
        
    }
  }

  function handleAddButton () {
    if (stock !== 0){
      addOn({id, cover , title, cant:count, price });
      setToCart(true)
    } else{
      return
    }
  }

  return (
    <>
      <div>
        <p className="product--price--text product--price-margin">Precio: ${unitPrice}</p>
        <div className="product--counter-position product--counter-layout product--counter-bg">
          {toCart ? <>
                      <Link to={'/cart'} className={'counter--link--text'}>
                        <Buttons type={"secondary"} content="Ir al carrito" />
                      </Link> 
                      <Link to={'/'} className={'counter--link--text'}>
                        <Buttons type={"secondary"} content="Seguir comprando" />
                      </Link>
                    </>
            :
            <>
              <Buttons type={"secondary"} content={"-"} action={handleCountLess} />
              <span className="counter--num-size counter--num-bg counter--num-layout counter--num-text">
                {count}
              </span>
              <Buttons type={"secondary"} content={"+"} action={handleCountAdd} />
              <Buttons type={"primary"} content="Agregar al carrito" action={handleAddButton} inactive={addInactive} />
            </>
          }
        </div>
      </div>
      {
        toCart? <Notification text={'Sus items fueron agregados'} type={'succes'} /> : null
      }
    </>
  );
};
