import { createContext, useContext, useReducer } from 'react';
import globalInitialState from './global-initial';
import globalReducer from './global-reducer';

const GlobalContext = createContext(null);

const GlobalDispatchContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, globalInitialState);

  return (
    <GlobalContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};

export const useGlobalDispatch = () => {
  return useContext(GlobalDispatchContext);
};
