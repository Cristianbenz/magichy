import { Link } from 'react-router-dom';
import Menu from "./menu/Menu";
import './navBar.css';

export default function NavBar () {
  return (
    <nav className="app--nav-bg app--nav-layout">
      <Link to={'/'}>
        <div className="nav--brand-img nav--brand-size" />
      </Link>
      <Menu />
    </nav>
  );
};
