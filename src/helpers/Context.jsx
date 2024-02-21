import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myProp, setMyProp] = useState(false);


  return (
    <MyContext.Provider value={{ myProp, setMyProp }}>
      {children}
    </MyContext.Provider>
  );
};
