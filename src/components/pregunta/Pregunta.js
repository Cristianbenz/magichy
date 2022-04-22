import { useState } from "react";
import './pregunta.css'

export default function Pregunta( { question, answer } ) {
    const [isOpen, setIsOpen] = useState(false);
    const ACTIVE = isOpen? null : 'questionContainer--answer-height';
    const ARROW = isOpen? 'question--arrow--down' : 'question--arrow-up'

  return (
    <>
      <section className="questionContainer-size questionContainer-position" onClick={ () => setIsOpen(!isOpen)}>
          <article className="questionContainer--question-layout questionContainer--question-border questionContainer--question-bg questionContainer--question-padding">
              <h2 className="question--h2-text">{question}</h2>
              <span className={ARROW}>{'<'}</span>
          </article>
          <article className={`questionContainer--answer-position questionContainer--answer-bg  ${ACTIVE} questionContainer--answer-padding`}>
              <p className="answer--p-text">{answer}</p>
          </article>
      </section>
    </>
  );
}
