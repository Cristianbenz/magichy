import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu ({ state }) {
  const IS_OPEN = !state ? '' : ' navbar-nav_open'

  return (
    <nav className={`navBar--nav-position nav--menu-layout navbar-nav--mobile ${IS_OPEN}`}>
      <ul className='nav--menu-layout'>
        <li>
          <Link to={"/aboutUs"} className={ 'menu--anchor-text'} >Sobre Nosotros</Link>
        </li>
        <li>
          <Link to={"/frequentQuestions"} className={ 'menu--anchor-text'}>Preguntas Frecuentes</Link>
        </li>
      </ul>
    </nav>
  );
};
