import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-bg  footer-text">
      <section className="footer--top-layout">
        <article>
          <p className="footer--subTitle-text">Enlaces:</p>
          <ul>
            <li className="enlaces--li">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="enlaces--li">
              <Link to={"/aboutUs"}>Sobre Nosotros</Link>
            </li>
            <li className="enlaces--li">
              <Link to={"/frequentQuestions"}>Preguntas Frecuentes</Link>
            </li>
          </ul>
        </article>
        <article className="footer--methods-position">
          <p className="footer--subTitle-text">Formas de pago:</p>
          <ul className="methods--ul-layout">
            <li>Efectivo</li>
            <li>MercadoPago</li>
          </ul>
        </article>
      </section>
      <p className="footer--copy-position">
        Pagina desarrollada por Cbenz - &copy; 2022 Cbenz
      </p>
    </footer>
  );
}
