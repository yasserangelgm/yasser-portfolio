import { forwardRef, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './projects.styles.css';

const Projects = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(props.isIntersect);
  }, [props.isIntersect]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section id="projects" ref={ref}>
        <h2 className="section-heading">Proyectos</h2>
        <Carousel responsive={responsive}>
          <div className="project-container">
            <div className="project-content">
              <div>
                <h3 className="project-tittle">
                  <a
                    href="https://vocal-basbousa-b541a9.netlify.app/"
                    target={'_blank'}
                    className="project-link"
                  >
                    JS CRUD App
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    Applicación CRUD hecha en Vanilla Javascript con
                    almacenamiento local (localStorage), full responsive.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-image"></div>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </section>
    </>
  );
});

export default Projects;
