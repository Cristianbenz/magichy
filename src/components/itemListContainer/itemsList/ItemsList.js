import Item from "./item/Item"

export default function ItemList( {books} ) {
  
  return (
    books.map( (book) =>  <Item key={book.id} id={book.id} img={book.cover} title={book.title} stock={book.stock} />)
  )
}
