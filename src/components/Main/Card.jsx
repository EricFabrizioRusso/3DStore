import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Links from '../Header/Links/Links';
import BuyPage from './Pages/BuyPage';


const Card = ({title,desc,price,img,img2,img3,handleData,MainformData,triggerCard,id,ammount,priceCard}) => {

  const [modalOpen, setmodalOpen] = useState(false);
  const image = document.getElementById('selectImg');
  const [blockBtn, setBlockBtn] = useState(true);



  const handleDelete=()=>{


    const objFounded= MainformData.find(obj => obj.title === title)
  
    if(!objFounded){
  
     setBlockBtn(true);
    }

  }


  useEffect(() => {
    
    handleDelete()

  }, [triggerCard]);
  

  const handleModal=(newState)=>{

    if(modalOpen === false){

      setmodalOpen(true)

    }else{

      setmodalOpen(false)

    }

  }

  const [formData, setFormData] = useState({


    img: img,
    title: title,
    price:price,
    ammount:1,
    id: id

  });


  const handleChange =(e)=>{

    const {name, value} = e.target;
    setFormData({

      ...formData,

      [name]: value,

    })


  }


  const handleSubmit=(e)=>{

    e.preventDefault();

    handleData(formData);
    setBlockBtn(false)
    //console.log(formData)

    

  }


  //console.log(img)


  return (
    <div className="card m-2 mycard text-light bg-dark">
      <div className='files'>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>
      </div>
        <a onClick={()=> handleModal()}>
          <img id='selectImg' loading='lazy' src={img} className="card-img-top" alt="..."/>
        </a>
        <div className="card-body fs-6">
            <h5 className="card-title">{title}</h5>
            <p className="card-text fw-light">{desc}</p>
            <p className='card-text fs-5 fw-light '>${price}</p>
            <form className='d-flex flex-column' onSubmit={handleSubmit}>
              {/* <input name='count' 
              value={formData.count} 
              onChange={handleChange} 
              className='m-auto mb-3 text-center text-light fs-6 lh-lg bg-dark border rounded border-light addremove ' type="number" min='0' placeholder='Cantidad'/> */}
              {blockBtn ?
                (<input id='addCart'  type='submit' value='Agregar al carrito' className="btn text-light bg-info m-auto me-auto w-100 lh-lg fw-light"/>)
                :(<h1 className='fs-6 text-center bg-success fw-light  text-light btn m-auto me-auto w-100 lh-lg'>Producto Agregado</h1>)
              }
            </form>
        </div>
        {modalOpen &&

          <Modal image={img} image2={img2} image3={img3} handleModal={handleModal} isOpen={modalOpen}/>
          
        }

   </div>
  )
}

export default Card