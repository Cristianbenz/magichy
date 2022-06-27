import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../services/firebase/getBooks";
import { useCartContext } from "../../context/cartContext";
import BookLoader from "../bookLoader/BookLoader";
import ItemDetail from "./itemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const { addToCart } = useCartContext();

  function addOn(item) {
    addToCart(item);
  }

  useEffect(() => {
    getDetail( productId )
      .then((book) => setItem({ id: book.id, ...book.data() }))
      .finally(function () {
        setLoading(false);
      });
  }, [productId]);

  return (
    <>{loading ? <BookLoader /> : <ItemDetail book={item} addOn={addOn} />}</>
  );
}
