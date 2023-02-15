import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import { useGlobal } from '../../context/global-context';

const HomePage = () => {
  const {
    state: { isLoading },
  } = useGlobal();
  return (
    <div className={`main-layout ${isLoading ? 'loading' : 'loaded'}`}>
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;
