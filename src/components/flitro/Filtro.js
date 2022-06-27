import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

import Buttons from "../buttons/Buttons";

import "./filtro.css";

export default function Filtro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const FilterLink = ({to, children}) => {
    const {pathname}  = useLocation();
    const IS_ACTIVE = (pathname.replaceAll('%20', ' ') === to) && 'menu--anchor--active';
    return (
      <li>
        <Link to={to} className={ `filter--link-text ${IS_ACTIVE}`} >{children}</Link>
      </li>
    )
  }


  return (
    <>
      {visualViewport.width > 768 ? (
        <aside className="filter-size filter-border filter-position filter-bg">
          <ul className="filter-layout">
            <FilterLink to={"/category/Aventura"} >Aventura</FilterLink>
            <FilterLink to={"/category/Ciencia Ficcion"} >Ciencia Ficcion</FilterLink>
            <FilterLink to={"/category/Terror"} >Terror</FilterLink>
            <FilterLink to={"/category/Fantasia"} >Fantasia</FilterLink>
            <FilterLink to={"/category/Romance"} >Romance</FilterLink>
          </ul>
        </aside>
      ) : (
        <aside className="filter-position">
          <Buttons
            type={"secondary"}
            content="Filtro"
            action={handleShow}
          ></Buttons>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Categorías</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="filter-layout">
                <li>
                  <Link className="filter--link-text" to={"/category/Aventura"}>
                    Aventura
                  </Link>
                </li>
                <li>
                  <Link
                    className="filter--link-text"
                    to={"/category/Ciencia Ficcion"}
                  >
                    Ciencia Ficcion
                  </Link>
                </li>
                <li>
                  <Link className="filter--link-text" to={"/category/Terror"}>
                    Terror
                  </Link>
                </li>
                <li>
                  <Link className="filter--link-text" to={"/category/Fantasia"}>
                    Fantasia
                  </Link>
                </li>
                <li>
                  <Link className="filter--link-text" to={"/category/Romance"}>
                    Romance
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </aside>
      )}
    </>
  );
}
