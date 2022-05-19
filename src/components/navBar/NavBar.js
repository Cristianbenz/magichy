import { useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from "./menu/Menu";
import CartWidget from './cartWidget/CartWidget'
import './navBar.css';

export default function NavBar () {
  const [ isNavOpen, setIsNavOpen ] = useState(false)

  const openNav = () => setIsNavOpen(!isNavOpen)

  return (
    <header className="app--navBar-bg app--navBar-layout">
      <div className='navbar--navToggler' onClick={openNav}>
        {!isNavOpen ? 
          <img src='https://i.ibb.co/Pwsk7VC/menu-hamburguesa.png' alt='Boton para abrir menu' />
          :
          <img src='https://i.ibb.co/CBqJZGb/cerrar.png' alt='Boton para cerrar menu' />
        }
      </div>
      <Link to={'/'}>
        <div className="navBar--brand-img navBar--brand-size navBar--brand-position" />
      </Link>
      <>
        <Menu state={isNavOpen} />
      </>
      <CartWidget />
    </header>
  );
};
