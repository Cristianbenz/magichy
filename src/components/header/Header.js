import './header.css'

export default function Header( { title } ){

    return (
        <section className="header-size header-bg header-layout">
            <h1 className='header--h1'>{title}</h1>
        </section>
    )
}