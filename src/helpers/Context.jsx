import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myProp, setMyProp] = useState(false);
  const [totalBuy, settotalBuy] = useState([]);

  return (
    <MyContext.Provider value={{ myProp, setMyProp,totalBuy,settotalBuy }}>
      {children}
    </MyContext.Provider>
  );
};
