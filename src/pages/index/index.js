import Filtro from "../../components/flitro/Filtro";
import Header from "../../components/header/Header";
import ItemListContainer from "../../components/itemListContainer/ItemListContainter";
import './products.css'

export default function Products() {
  return (
    <>
      <Header title={'Libros'} />
      <div className="produts-layout">
      <Filtro />
      <ItemListContainer />
    </div>
    </>
    
  );
}
