import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './menu.css';

export default function Menu () {

  return (
    <div className="nav--menu-position nav--menu-layout">
      <Link to={"/aboutUs"} className={ 'menu--anchor-text'} >Sobre Nosotros</Link>
      <Link to={"/frequentQuestions"} className={ 'menu--anchor-text'}>Preguntas Frecuentes</Link>
      <CartWidget />
    </div>
  );
};
