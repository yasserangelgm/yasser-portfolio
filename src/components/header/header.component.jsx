import { useState, useEffect } from 'react';
import { useGlobal } from '../../context/global-context';
import './header.styles.css';

const Header = ({ aboutRef, skillsRef, projectsRef, scrollDirection }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [asideClass, setAsideClass] = useState('side-menu');
  const [menuBurguerClass, setMenuBurguerClass] = useState('hamburguer');
  const [isDesktop, setIsDesktop] = useState(false);

  const {
    state: { isLoading },
  } = useGlobal();

  /* Set the state of mobile icon menu */
  const handleMenuClick = () => {
    setIsClicked(!isClicked);

    if (isClicked) {
      setMenuBurguerClass('hamburguer isClicked');
      setAsideClass('side-menu active');
    } else {
      setMenuBurguerClass('hamburguer');
      setAsideClass('side-menu');
    }
  };

  /* Check if device secreen is larger than 768px for remove active and isClicked class from elements */
  //TODO ?? Seria conveniente pasar esto a un contexto global?
  const mediaQuery = '(min-width: 768px)';
  const mediaQueryMatch = window.matchMedia(mediaQuery);

  useEffect(() => {
    const handleClassByMediaQuery = (e) => {
      const isDesktop = e.matches;
      if (isDesktop) {
        setMenuBurguerClass('hamburguer');
        setAsideClass('side-menu');
      }
      return setIsDesktop(isDesktop);
    };
    mediaQueryMatch.addEventListener('change', handleClassByMediaQuery);
    return () => {
      mediaQueryMatch.removeEventListener('change', handleClassByMediaQuery);
    };
  }, [isDesktop, mediaQueryMatch]);

  /* Handle link to page section */
  const handleScroll = (e, elementRef) => {
    e.preventDefault();
    elementRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
    });
  };

  return (
    <>
      <header
        className={`main-header ${
          scrollDirection === 'up' ? '' : 'hide-header'
        }`}
      >
        <nav className="main-nav">
          <div className="logo ">
            <a href="/">
              <img src="/logo.png" alt="Logo for Yasser Web Development" />
            </a>
          </div>
          <div className={`nav-links`}>
            <ul>
              <li
                className="nav-link-item fadeInDown"
                style={{ animationDelay: 0 + 'ms' }}
                onClick={(event) => handleScroll(event, aboutRef)}
              >
                <a href=""></a>Acerca
              </li>
              <li
                className="nav-link-item fadeInDown"
                style={{ animationDelay: 100 + 'ms' }}
                onClick={(event) => handleScroll(event, skillsRef)}
              >
                <a href=""></a>Habiliades
              </li>
              <li
                className="nav-link-item fadeInDown"
                style={{ animationDelay: 200 + 'ms' }}
                onClick={(event) => handleScroll(event, projectsRef)}
              >
                <a href=""></a>Proyectos
              </li>
              <li
                className="nav-link-item fadeInDown"
                style={{ animationDelay: 300 + 'ms' }}
              >
                <a href=""></a>Contacto
              </li>
            </ul>
            <div
              className="nav-link-item-button fadeInDown  "
              style={{ animationDelay: 400 + 'ms' }}
            >
              <a className="resume-button">Curriculum</a>
            </div>
          </div>
          <div className="menu" onClick={handleMenuClick}>
            <div>
              <button className="menu-button">
                <div className="ham-box">
                  <div className={menuBurguerClass}></div>
                </div>
              </button>
              <aside className={asideClass}>
                <nav>
                  <ul>
                    <li>
                      <a href=""></a>Acerca
                    </li>
                    <li>
                      <a href=""></a>Habilidades
                    </li>
                    <li>
                      <a href=""></a>Proyectos
                    </li>
                    <li>
                      <a href=""></a>Contacto
                    </li>
                  </ul>
                  <a className="resume-link">Curriculum</a>
                </nav>
              </aside>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
