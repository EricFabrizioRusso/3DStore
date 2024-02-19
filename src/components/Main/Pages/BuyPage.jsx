import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header'
import BuyItem from '../../BuySection/BuyItem'


const BuyPage = ({data}) => {

  if(!data) return
  const {title,count,img}= data;

  return (
    <div>
        {/* <Header/> */}
        <div className='buyContainer m-auto rounded d-flex flex-column mb-5 '>
            <BuyItem title={title} count={count} img={img}/>
     
        </div>
        <div className='finalBuy'>
          <a id='btnFinalBuy' className='btn btn-primary m-3 fs-4' href="">Comprar ahora</a>
        </div>
    </div>
  )
}

export default BuyPage