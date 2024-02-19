import React, { useState, useEffect } from 'react';

const BuyItem = ({item,formData,handleDeleteData,handleTotalPrice}) => {


  if(!item) return <h1 className='text-center'>No se ha encontrado ningun producto</h1>

  let {title,price,img}= item;
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(price);





  const remove=()=>{

   setPrecio( precio - price)
   setCantidad(cantidad - 1)
   handleTotalPrice(precio);


   if(cantidad <= 0){

    handleDelete;

   }
    
  }

  const add=()=>{

    setPrecio( precio + price)
    setCantidad(cantidad + 1)
    handleTotalPrice({precio,title});

    


  }


  /*const handleChange=(e)=>{

    console.log(cantidad);
    console.log(e.target.value)

    const number= document.getElementById('value')
    setPrecio(parseInt(price) * parseInt(number.value))
    setCantidad(number.value)


    if(cantidad < e.target.value){
      
      setCantidad(cantidad + 1)
      setPrecio(precio + price)

    }else{

      setCantidad(cantidad - 1)
      setPrecio(precio - price)
    }

    
 
    
    
  }*/
  const handleDelete=()=>{

    console.log('eliminando item')
    let newForm=formData.filter((el) => el.title !== title)


    handleDeleteData(newForm);
  }

  useEffect(() => {
    

    handleTotalPrice(precio)
  }, []);
  




 

  

  return (
    <div className='buyItem m-2 border border-light border-opacity-10 fs-6'>
        <div className="card bg-dark d-flex flex-row">
            <img loading='lazy' src={img}className="card-img-top itemImg" alt="..."/>
            <button id='btnItem' onClick={handleDelete} className=' m-1 bg-danger rounded-circle text-light'>X</button>
            <div className="card-body p-0 m-2">
                <h5 className="card-title text-light">{title}</h5>
                <div className='d-flex'>
                  <p className="card-text text-light m-1">X{cantidad}</p>
                  <p className="card-text text-success  fs-5">$ {precio}</p>
                </div>
                 <a onClick={add} href="#" className="btn btn-primary m-2">Añadir</a>
                  {/* <input name='count' 
              onChange={handleChange}
              value={cantidad}
              className='m-auto mb-3 text-center text-light fs-6 lh-lg bg-dark border rounded border-light addremove ' type="number" min='0' placeholder='U.'/> */}
                  <a onClick={remove} href="#" className="btn btn-primary m-2">Remover</a>
            </div>
        </div>
    </div>
  )
}

export default BuyItem