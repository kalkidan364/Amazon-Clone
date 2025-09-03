import React, {createContext, useReducer } from "react";

export const DataContext = createContext();
export const DataProvider = ({ reducer, inttialState, children }) => {
  const [state, dispatch] = useReducer(reducer, inttialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
