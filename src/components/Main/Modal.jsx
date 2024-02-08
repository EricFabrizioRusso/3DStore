import React, { useState, useEffect } from 'react';
import Carousel from './Carousel'


const Modal = ({ image, handleModal, isOpen }) => {

  if(isOpen !== true) return
  

  document.addEventListener('click', (e) =>{

    //console.log(e.target.id)
    if(e.target.id === 'bg' || e.target.id === 'bg-content' || e.target.id === 'btn-close'){

  
      handleModal(false)
      

      
    }

  })






  return (
    <div id='bg' className='mymodal'>
      <button id='btn-close' className='btn fs-1 text-light m-2'>X</button>
      <div id='bg-content' className='modal-content'>
        <button className='btn'></button>
         <Carousel image={image}/>
      </div>
       
    </div>
  )
}

export default Modal