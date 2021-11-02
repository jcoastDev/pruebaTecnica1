import React, { useState } from 'react';

const Context = React.createContext({});

export function ComentsContextProvider({ children }) {
  const [coments, setComents] = useState([]);

  return (
    <Context.Provider value={{ coments, setComents }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
