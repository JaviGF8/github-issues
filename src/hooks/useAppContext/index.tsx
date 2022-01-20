import { useContext, createContext } from 'react';

import { AppContextType } from './types.d';

export const AppContext = createContext<AppContextType>({} as AppContextType);

const useAppContext: () => AppContextType = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must exist to call useAppContext');
  }
  return context;
};

export default useAppContext;
