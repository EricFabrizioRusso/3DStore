import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myProp, setMyProp] = useState(false);
  const [product, setProduct] = useState(false);
  const [pNumb, setPNumb] = useState([]);

  return (
    <MyContext.Provider value={{ myProp, setMyProp, product,setProduct,pNumb,setPNumb }}>
      {children}
    </MyContext.Provider>
  );
};
