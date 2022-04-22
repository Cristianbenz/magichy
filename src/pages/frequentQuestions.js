import Header from "../components/header/Header";
import Pregunta from "../components/pregunta/Pregunta";

export default function FrequentQuestions(){
    const QUESTIONS = [
        {   
            id: 'FQ1',
            question: '¿Cuales son los medios de pago?',
            answer: 'Se puede abonar por medio de mercado pago y todas las opciones que ofrece, transferencia bancaria o por transferencia en Abitab o Redpagos'
        },
        {
            id: 'FQ2',
            question: '¿Se hacen envios?',
            answer: '¡Claro! Luego de realizada la compra coordinamos el método de envio que te sea mas cómodo.'
        },
        {
            id: 'FQ3',
            question: '¿Como realizar una compra?',
            answer: 'Primero debes buscar el/los libro/s que desees, ya sea en el buscador o explorar dentro de todos los productos. Luego agregarlos al carrito con el botón que lo indique respectivamente. Por ultimo dirigirse a la sección tienda y clickear en "comprar", a partir de ahi seguir los pasos que serán indicados.'
        },
        {
            id: 'FQ4',
            question: '¿Puedo ir a buscar mis compras personalmente?',
            answer: 'También se ofrece esta opción, dentro de los pasos en la finalizacion de la compra, deberá elegir la opción correspondiente se le enviará la dirección con los detalles de su compra.'
        },
        {
            id: 'FQ5',
            question: '¿Se pueden solicitar libros especificos?',
            answer: 'Si, brindamos la oportunidad de solicitar algún libro que busques y no encuentres, en estos casos deberás realizarlo en la sección "contacto" y te responderemos por algún medio que brindes, tanto la mejor opción, como si no fuera posible conseguirlo.'
        }
    ]

    return( 
    <>
        <Header title={'Preguntas Frecuentes'} />
        {QUESTIONS.map( (question) => <Pregunta key={question.id} question={question.question} answer={question.answer} />)}
    </>
    )
}