import './aboutUsInfo.css';

export default function AboutUsInfo({ side, subtitle, info }) {

  
  return (
    <section className={`aboutUsInfo-margin aboutUsInfo-${side}Layout`} data-aos={"zoom-in-up"}>
      <div>
        <h2 className="aboutUsInfo--h2-text">{subtitle}</h2>
        <p className='aboutUsInfo--p-text'>{info}</p>
      </div>
    </section>
  );
}
