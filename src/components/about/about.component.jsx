import { forwardRef } from 'react';

import './about.styles.css';

const About = forwardRef((props, ref) => {
  return (
    <>
      <section id="about" ref={ref}>
        <h2 className="section-heading">Acerca de mí</h2>
        <div className="about-container">
          <div className="about-text">
            <div>
              <p>
                ¡Hola! Soy Yasser Angel, un desarrollador web fullstack radicado
                en México, especializado en la creación de aplicaciones web con
                HTML, CSS, Javascript, Node y React.
              </p>
              <p>
                Desde que comencé a explorar el mundo de la programación web, he
                descubierto mi pasión por la creación de soluciones en línea. Me
                encanta pensar en formas creativas de resolver problemas y hacer
                que las aplicaciones sean más eficientes y atractivas.
              </p>
              <p>
                Además de mi experiencia en programación, también disfruto mucho
                trabajar en equipo y colaborar con otros profesionales para
                llevar a cabo proyectos exitosos.
              </p>
            </div>
          </div>
          <div className="photo">
            <div className="wrapper">
              <picture>
                <img
                  src="/about.jpg"
                  alt="Yasser Angel Full Web Stack Developer "
                />
              </picture>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
