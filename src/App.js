import './App.css';
import HomePage from './pages/home-page/home.page';
import { useGlobal, useGlobalDispatch } from './context/global-context';
import { useEffect } from 'react';
import Intro from './components/intro/intro.component';
function App() {
  const { state } = useGlobal();
  const dispatch = useGlobalDispatch();

  useEffect(() => {
    dispatch({ type: 'DATA_LOADING' });
    setTimeout(() => {
      dispatch({ type: 'DATA_LOADED' });
    }, 1000);
  }, []);

  return (
    <>
      {state.isLoading ? <Intro isLoading={state.isLoading} /> : <HomePage />}
    </>
  );
}

export default App;
