import { Link } from 'react-router-dom'
import './filtro.css'

export default function Filtro () {
    return(
        <aside className="filter-size filter-border filter-position filter-bg filter-layout">
            <Link className='filter--link-text' to={'/category/Aventura'} >Aventura</Link>
            <Link className='filter--link-text' to={'/category/Ciencia Ficcion'} >Ciencia Ficcion</Link>
            <Link className='filter--link-text' to={'/category/Terror'} >Terror</Link>
            <Link className='filter--link-text' to={'/category/Fantasia'} >Fantasia</Link>
            <Link className='filter--link-text' to={'/category/Romance'} >Romance</Link>
        </aside>

    )
}