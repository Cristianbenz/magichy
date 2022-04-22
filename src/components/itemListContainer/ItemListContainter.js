import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../services/firebase/getBooks";
import ItemList from "./itemsList/ItemsList";
import SkeletonLoader from "../contentLoader/ContentLoader";
import "./itemListContainer.css";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    getBooks(categoryName)
        .then((booksList) =>
          setBooks(
            booksList.docs.map((book) => ({ id: book.id, ...book.data() }))
          )
        )
        .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <section className="itemListContainer-layout">
      {loading ? <SkeletonLoader /> : <ItemList books={books} />}
    </section>
  );
}
