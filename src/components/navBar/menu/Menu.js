import { Link, useLocation } from 'react-router-dom';
import './menu.css';

export default function Menu ({ state }) {
  const IS_OPEN = !state ? '' : ' navbar-nav_open';
  
  const NavLink = ({to, children}) => {
    const {pathname}  = useLocation();
    const IS_ACTIVE = (pathname === to) && 'menu--anchor--active';
    return (
      <li>
        <Link to={to} className={ `menu--anchor-text ${IS_ACTIVE}`} >{children}</Link>
      </li>
    )
  }

  return (
    <nav className={`navBar--nav-position nav--menu-layout navbar-nav--mobile ${IS_OPEN}`}>
      <ul className='nav--menu-layout'>
        <NavLink  to={"/aboutUs"} >Sobre Nosotros</NavLink>
        <NavLink to={"/frequentQuestions"} >Preguntas Frecuentes</NavLink>
      </ul>
    </nav>
  );
};
