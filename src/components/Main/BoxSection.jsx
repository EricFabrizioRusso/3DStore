import React, { useState, useEffect, useContext } from 'react';
import Card from './Card'
import { modelEx, modelEx2, modelEx3 } from '../../helpers/Imgs';
import BuyPage from './Pages/BuyPage';
import BuyItem from '../BuySection/BuyItem';
import { MyContext } from '../../helpers/Context';






const BoxSection = () => {

  
  const [formData, setFormData] = useState([]);
  const {myProp, setMyProp} = useContext(MyContext)
  const [triggerCard, setTriggerCard] = useState(1);
  const [total, setTotal] = useState(0);


  const handleData=(data)=>{

    const newData=[...formData,data]

    setFormData(newData);
   

    
    
  }
  const handleDeleteData=(dItem)=>{

    console.log('item eliminado', dItem)
    setFormData(dItem)
    setTriggerCard(triggerCard + 1);



  }




  //console.log(formData)


  const handleModal=()=>{

    document.addEventListener('click',(e)=>{

      if(e.target.id === 'btn-close' || e.target.id === 'buyModal'){

        setMyProp(false);

      }

    })


  }

  // const handleTotal=(items)=>{

  //   console.log('entra');
  //   const newTotal=[...total, items]
  //   setTotal(newTotal);

   



  // }

  const handleTotalPrice=(item)=>{

    setTotal(total + item)

  }
  console.log(total)

  return (
    <div className='d-flex flex-wrap justify-content-center boxsection'>
        <Card title={modelEx.title} 
        desc={modelEx.desc} 
        img={modelEx.img}
        img2={modelEx.img2}
        img3={modelEx.img3}
        price={modelEx.price}
        handleData={handleData}
        MainformData={formData}
        triggerCard={triggerCard}
        />
        <Card title={modelEx2.title} 
        desc={modelEx2.desc} 
        img={modelEx2.img}
        img2={modelEx2.img2}
        img3={modelEx2.img3}
        price={modelEx2.price}
        handleData={handleData}
        MainformData={formData}
        triggerCard={triggerCard}
        />
        <Card title={modelEx3.title} 
        desc={modelEx3.desc} 
        img={modelEx3.img}
        img2={modelEx3.img2}
        img3={modelEx3.img3}
        price={modelEx3.price}
        handleData={handleData}
        MainformData={formData}
        triggerCard={triggerCard}
        />

     {myProp &&

      <div onClick={handleModal} id='buyModal' className='buySection d-flex flex-column justify-content-center align-items-center'>
          <div className='buyContainer rounded d-flex flex-column mb-5 '>
            {

              formData.map((item,index) =>(
              
                <BuyItem item={item}
                 key={index}
                  formData={formData}
                   handleDeleteData={handleDeleteData}
                    handleTotalPrice={handleTotalPrice}
                   />
              
                
                
              ))
              

            }
          </div>
          {formData.length >= 1 ?

            (<div className='finalBuy d-flex flex-column'>
              <h1 className='mb-3'>${total}</h1>
              <a id='btnFinalBuy' onClick={handleTotalPrice} className='btn btn-primary m-3 fs-4' href="">Comprar ahora</a>
            </div>)
            : <h1 className='text-center'>No se ha encontrado ningun producto</h1>

          }
          <button onClick={handleModal} id='btn-close' className='btn fs-1 text-light m-2'>X</button>
      </div> 

     }



        
    </div>
  )
}

export default BoxSection