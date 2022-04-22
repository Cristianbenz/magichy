import AboutUsInfo from "../components/aboutUsInfo/AboutUsInfo";
import Header from "../components/header/Header";

export default function AboutUs(){
    const INFO = [
        {
            id: 'about1',
            side: 'left',
            subtitle: '¿Quienes Somos?',
            info: 'Somos 2 chicos de 20 años uruguayos que juntaron 2 gustos distintos en un solo proyecto, los libros y crear sitios web.'
        },
        {
            id: 'about2',
            side: 'right',
            subtitle: 'Nuestra Visión',
            info: 'Este sitio surgio como un simple proyecto y hobby, pero tambien con la intención de ser algo real y poner al alcance de las personas las mejores y mas atractivas obras literarias, siendo una referencia en el rubro.'
        },
        {
            id: 'about3',
            side: 'left',
            subtitle: 'Nuestra Misión',
            info: 'Somos un e-comerce que facilita la posibilidad de que la población uruguaya adquiera libros y promueve el gusto por los mismos a todo el país.'
        },
        {
            id: 'about4',
            side: 'right',
            subtitle: 'Lorem ipsum dolor sit amet.',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem delectus necessitatibus nam consequuntur nisi, eveniet veritatis provident perferendis molestias.'
        }
    ] 

    return (
        <>
         <Header title={'Sobre Nosotros'} />
         {INFO.map( (info) => <AboutUsInfo key={info.id} side={info.side} subtitle={info.subtitle} info={info.info} />)}
        </>
    )
}