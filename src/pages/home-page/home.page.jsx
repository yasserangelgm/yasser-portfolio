import { useRef } from 'react';
import About from '../../components/about/about.component';
import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import Projects from '../../components/projects/projects.component';
import Skills from '../../components/skills/skills.component';
import { useGlobal } from '../../context/global-context';
import { useIntersectedObserver } from '../../hooks/useIntersectedObserver';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const HomePage = () => {
  const {
    state: { isLoading },
  } = useGlobal();

  const scrollDirection = useScrollDirection();

  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);

  const entryAbout = useIntersectedObserver(about, {
    root: null,
    rootMargin: '-300px',
    treshold: 1.0,
  });

  const entrySkills = useIntersectedObserver(skills, {
    root: null,
    rootMargin: '-300px',
    treshold: 0.2,
  });

  const entryProjects = useIntersectedObserver(skills, {
    root: null,
    rootMargin: '-300px',
    treshold: 0.2,
  });

  return (
    <div className={`main-layout ${isLoading ? 'loading' : 'loaded'}`}>
      <Header
        aboutRef={about}
        skillsRef={skills}
        projectsRef={projects}
        scrollDirection={scrollDirection}
      />
      <main className="main-content-container">
        <Hero />
        <About ref={about} isIntersect={entryAbout} />
        <Skills ref={skills} isIntersect={entrySkills} />
        <Projects ref={projects} isIntersect={entryProjects} />
        <div style={{ height: '100vh' }}></div>
      </main>
    </div>
  );
};

export default HomePage;
