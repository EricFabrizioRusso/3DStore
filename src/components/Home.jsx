import React, { useState } from 'react';
import Header from './Header/Header'
import BoxSection from './Main/BoxSection'
import { MyProvider } from '../helpers/Context';

const Home = () => {

  



  return (

      <div>
        <MyProvider>
          <Header/>
          <BoxSection/>
        </MyProvider>
      </div>

    )
}

export default Home