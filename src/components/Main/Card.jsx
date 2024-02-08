import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';


const Card = (title,desc,img) => {

  const [modalOpen, setmodalOpen] = useState(false);
  const image = document.getElementById('selectImg');


  const handleModal=(newState)=>{

    if(modalOpen === false){

      setmodalOpen(true)

    }else{

      setmodalOpen(false)

    }

  }
  


  return (
    <div className="card m-3 mycard  text-light bg-dark">
        <a onClick={()=> handleModal()}>
          <img id='selectImg' src="https://source.unsplash.com/random/800x800?sig=1" className="card-img-top" alt="..."/>
        </a>
        
        <div className="card-body">
            <h5 className="card-title fs-4">Card title</h5>
            <p className="card-textb fs-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex'>
              <a href="#" className="btn btn-secondary bg-secondary m-auto me-auto">Añadir al carrito</a>
              <input className='m-3 bg-dark border rounded border-light text-light addremove' type="number" min='0'/>
            </div>
        </div>
        {modalOpen &&

          <Modal image={image} handleModal={handleModal} isOpen={modalOpen}/>
          
        }
   </div>
  )
}

export default Card