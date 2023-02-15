import { forwardRef } from 'react';
import SkillChart from '../skill-chart/skill-chart.component';

import './skills.styles.css';

const Skills = forwardRef((props, ref) => {
  return (
    <>
      <section id="skills" ref={ref}>
        <h2 className="section-heading">Habilidades</h2>
        <div className="skills-container">
          <div className="skills-text">
            <div>
              <p>
                Estas son algunas tecnologías que he aprendido desde que empecé
                mi camino en el desarrollo web hace unos 4 añoa atrás. Me gusta
                estar al tanto de las actualizaciones mas recientes y descubrir
                nuevas maneras de realizar mi trabajo.
              </p>
            </div>
          </div>
          <div className="skills-details">
            <SkillChart skillName="HTML" percentage={85} />
            <SkillChart skillName="CSS" percentage={80} />
            <SkillChart skillName="Javascript" percentage={75} />
            <SkillChart skillName="REACT" percentage={70} />
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
