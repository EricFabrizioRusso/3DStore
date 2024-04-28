import React, { useState, useEffect } from 'react';

const BuyItem = ({item,formData,handleDeleteData,handleChangeData,itemTrigger,calcTotal}) => {




  let {title,price,img}= item;
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(price);
  let basePrice=price
  //console.log(item,'item')

  useEffect(() => {

    //handleSendData()

  }, [itemTrigger]);



  /*const handleSendData=()=>{

    handleChangeData(item);
   

  }*/


  const remove=()=>{

    setPrecio( precio - basePrice)
    setCantidad(cantidad - 1)

   let obj=formData.find((obj)=>obj.title === title)

   if(obj){

      if(cantidad === 1 || precio === 0){

        handleDelete();

        obj['ammount']=cantidad 
        
      }else{

        obj['ammount']=cantidad - 1
      }
     

    
    //console.log(obj)
    handleChangeData(obj);
     
   }else{

     console('no se encontro el obj')
   }


   

   /*let timer=setTimeout(() => {

    updateFather()
    
   }, 1000);

   clearTimeout(timer);*/
   





  }

  const add=()=>{

    setPrecio( precio + basePrice)
    setCantidad(cantidad + 1)

            
    let obj=formData.find((obj)=>obj.title === title)


    if(obj){
      
        
      obj['ammount']=cantidad + 1
       // console.log(obj);
  
   
      
     handleChangeData(obj);

    }else{

      console('no se encontro el obj')
    }


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

    //console.log('eliminando item')
    let newForm=formData.filter((el) => el.title !== title)
    //console.log(newForm,'newForm')
    handleDeleteData(newForm);
   


  }


  




 

  

  return (
    <div className='buyItem m-2 border border-light border-opacity-10 fs-6'>
        <div className="card bg-dark d-flex flex-row">
            <img loading='lazy' src={img}className="card-img-top itemImg" alt="..."/>
            {/* <button id='btnItem' onClick={handleDelete} className=' m-1 bg-danger rounded-circle text-light'>X</button> */}
            <div className="card-body p-0 m-2">
                <h5 className="card-title text-light fs-6">{title}</h5>
                <div className='d-flex'>
                  <p className="card-text text-light m-1 fs-6">X{cantidad}</p>
                  <p className="card-text text-success fw-light  fs-5">$ {precio}</p>
                </div>
                 <a onClick={add} href="#" className="btn  text-light m-2 fw-light bg-info btn-buyItem">Añadir</a>
                  {/* <input name='count' 
              onChange={handleChange}
              value={cantidad}
              className='m-auto mb-3 text-center text-light fs-6 lh-lg bg-dark border rounded border-light addremove ' type="number" min='0' placeholder='U.'/> */}
                  <a onClick={remove} href="#" className="btn  text-light fw-light bg-info m-2 btn-buyItem">Remover</a>
            </div>
        </div>
    </div>
  )
}

export default BuyItem