import { Link } from "react-router-dom";
import Buttons from "../../components/buttons/Buttons";
import './noMatch.css'

export default function NoMatch() {
  return (
    <>
      <h1 className="noMatch--h1">Error 404 - Seccion no Encontrada</h1>
        <Link to={'/'}>
            <Buttons type={'primary'} content={'Ir al inicio'} />
        </Link>
    </>
  );
}
