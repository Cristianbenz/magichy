import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const EXISTE = cartList.some((obj) => obj.title === item.title);
    if (EXISTE) {
      const LIBRO_REPETIDO = cartList.find((book) => book.title === item.title);
      LIBRO_REPETIDO.cant += item.cant;
      LIBRO_REPETIDO.price += item.price;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, item]);
    }
  };
    
  const updateTotalPrice = () => {
      return cartList.reduce((acu, el) => {
        return acu + (el.price * el.cant);
      }, 0)
  }  

  const updateCant = () => {
    return cartList.reduce((total, item) => {
      return total + item.cant;
    }, 0);
  };

  const deleteItem = (toDelete) => {
    const SELECT_BOOK = cartList.find( (book) => book.id === toDelete);
    if (SELECT_BOOK.cant === 1) {
      setCartList(cartList.filter((book) => book.id !== SELECT_BOOK.id));
    } else {
      SELECT_BOOK.cant -= 1
      setCartList([...cartList])
      updateTotalPrice()
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <cartContext.Provider
      value={{
        cartList,
        updateTotalPrice,
        addToCart,
        clearCart,
        deleteItem,
        updateCant,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
