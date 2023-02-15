import { useRef } from 'react';
import About from '../../components/about/about.component';
import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import Skills from '../../components/skills/skills.component';
import { useGlobal } from '../../context/global-context';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const HomePage = () => {
  const {
    state: { isLoading },
  } = useGlobal();

  const scrollDirection = useScrollDirection();

  const about = useRef(null);
  const skills = useRef(null);
  return (
    <div className={`main-layout ${isLoading ? 'loading' : 'loaded'}`}>
      <Header
        aboutRef={about}
        skillsRef={skills}
        scrollDirection={scrollDirection}
      />
      <main className="main-content-container">
        <Hero />
        <About ref={about} />
        <Skills ref={skills} />
      </main>
    </div>
  );
};

export default HomePage;
