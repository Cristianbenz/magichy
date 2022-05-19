import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";

import Buttons from "../buttons/Buttons";

import "./filtro.css";

export default function Filtro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {visualViewport.width > 768 ? (
        <aside className="filter-size filter-border filter-position filter-bg filter-layout">
          <Link className="filter--link-text" to={"/category/Aventura"}>
            Aventura
          </Link>
          <Link className="filter--link-text" to={"/category/Ciencia Ficcion"}>
            Ciencia Ficcion
          </Link>
          <Link className="filter--link-text" to={"/category/Terror"}>
            Terror
          </Link>
          <Link className="filter--link-text" to={"/category/Fantasia"}>
            Fantasia
          </Link>
          <Link className="filter--link-text" to={"/category/Romance"}>
            Romance
          </Link>
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
