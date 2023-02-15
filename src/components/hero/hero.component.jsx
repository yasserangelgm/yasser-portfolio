import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './hero.styles.css';
const Hero = () => {
  return (
    <>
      <main className="main-content-container">
        <div className="main-content">
          <div style={{ animationDelay: 0 + 'ms' }}>
            <TypeAnimation
              cursor={false}
              sequence={['', 3000, 'Hola, mi nombre es', 2000]}
              speed={60}
              wrapper="h1"
              repeat={0}
            />
          </div>
          <div className="fadeInUp " style={{ animationDelay: 3100 + 'ms' }}>
            <h2 className="big-heading">Yasser Angel</h2>
          </div>
          <div className="fadeInUp " style={{ animationDelay: 3200 + 'ms' }}>
            <h3 className="big-heading">
              Me apasiona desarrollar soluciones para la web
            </h3>
          </div>
          <div className="fadeInUp " style={{ animationDelay: 3300 + 'ms' }}>
            <p>
              Soy desarrollador web full stack con sede en México. Me dedico a
              crear aplicaciones web de alta calidad y escalables utilizando las
              tecnologías más modernas.
            </p>
          </div>
          <div
            className="email-link fadeInUp"
            style={{ animationDelay: 3400 + 'ms' }}
          >
            <a href="/">Hecha un vistazo a mis proyectos</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
