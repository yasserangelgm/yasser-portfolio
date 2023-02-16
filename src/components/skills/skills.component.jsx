import { forwardRef, useEffect, useState } from 'react';
import SkillChart from '../skill-chart/skill-chart.component';

import './skills.styles.css';

const Skills = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(props.isIntersect);
  }, [props.isIntersect]);

  return (
    <>
      <section id="skills" ref={ref}>
        <h2 className="section-heading">Habilidades</h2>
        <div className="skills-container">
          <div className="skills-text">
            <div>
              <p>
                Estas son algunas tecnologías que he aprendido desde que empecé
                mi camino en el desarrollo web hace unos 4 años atrás. Me gusta
                estar al tanto de las actualizaciones mas recientes y descubrir
                nuevas maneras de realizar mi trabajo.
              </p>
            </div>
          </div>
          <div className="skills-details">
            <SkillChart skillName="HTML" percentage={isVisible ? 90 : 0} />
            <SkillChart skillName="CSS" percentage={isVisible ? 85 : 0} />
            <SkillChart
              skillName="Javascript"
              percentage={isVisible ? 85 : 0}
            />
            <SkillChart skillName="REACT" percentage={isVisible ? 80 : 0} />
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
