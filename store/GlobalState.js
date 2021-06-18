import { createContext, useReducer, useEffect } from 'react';
import reducers from './Reducers.js';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
