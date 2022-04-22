import ItemCount from "../itemCount/ItemCount";
import './itemDetail.css'

export default function ItemDetail( { book, addOn } ) {
  return (
    <section className="itemDetail-size itemDetail-border itemDetail-layout itemDetail-bg">
        <img className="itemDetail--img-size" src={book.cover} alt={`Portada de title`} />
      <article className="details--rightColumn-layout">
      <div>
        <h1 className='rightColumn--title-text'>{book.title}</h1>
          <p className='rightColumn--p-position'><b>Autor:</b> {book.author}</p>
          <p className='rightColumn--p-position'><b>Descripción:</b> {book.description}</p>
          <p className='rightColumn--p-position'><b>Género:</b> {book.genre}</p>
        </div>
        <div>
          <ItemCount id={book.id} cover={book.cover} title={book.title} stock={book.stock} price={book.price} initial={1} addOn={addOn} />
        </div>
      </article>
    </section>
  );
}
