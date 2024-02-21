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
  const [updateSection, setUpdateSection] = useState(0);
  const [itemTrigger, setitemTrigger] = useState(0);
  const buyModal= document.getElementById('buyModal')
  const [caclTotal, setCaclTotal] = useState([]);
  const [result, setResult] = useState(0);





  
  const updateFather=()=>{
    
    console.log('entra')
    setUpdateSection(updateSection + 1)
    
  }
  
  const handleItemTrigger=()=>{
    
    setitemTrigger(itemTrigger + 1)
    
  }

  
  
  const handleData=(data)=>{
    
    const newData=[...formData,data]
    setFormData(newData);
    
    
    
    
  }
  
  
  const handleChangeData=(newData)=>{
    
    
    
    let obj= formData.filter(obj => obj.title !== newData.title)
    obj.push(newData)
    
    console.log(obj)
    setCaclTotal(obj)
    
    
    
    
    
    
    
  }
  
  const handleTotal=()=>{
    
    let calc=0;
    let t=0;
  

    caclTotal.forEach(el=>{

      let t=el.ammount * el.price

      calc+= t;
    })

    setResult(calc)
  
  
  }
  
  const handleDeleteData=(dItem)=>{


    console.log('item eliminado', dItem)
    setFormData(dItem);
    setCaclTotal(dItem);
    handleTotal();
    //console.log(dItem);
    setTriggerCard(triggerCard + 1);




  }
   useEffect(() => {
     
     
     if(myProp === true){
       
       buyModal.classList.remove('d-none')
       
     }else{
       
       
       
     }
     
     handleTotal();
     console.log('renderizado')
     
   }, [myProp,formData,handleChangeData,triggerCard]);



  console.log(caclTotal)



  const handleModal=()=>{




   document.addEventListener('click',(e)=>{

    if(e.target.id === 'buyModal' || e.target.id === 'btn-close'){

  
      buyModal.classList.add('d-none')
      setMyProp(false);

    }


   })

    
  }

  
  const phone= '+541168699670'
  const message= `Hola, quisiera encargar los siguientes productos: ${caclTotal[0]}Total: ${result}`
  const whatsappLink=`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
  //console.log(formData,'formulario')






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
        id={'ejemplo1'}

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
        id={'ejemplo2'}

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
        id={'ejemplo3'}
        />

     
      

      <div onClick={handleModal} id='buyModal' className='buySection d-flex flex-column justify-content-center align-items-center d-none'>
          <div className='buyContainer rounded d-flex flex-column mb-5 '>
            {

              formData.map((item,index) =>(
              
                <BuyItem item={item}
                 key={item.id}
                  formData={formData}
                   handleDeleteData={handleDeleteData}
                   updateFather={updateFather}
                   handleChangeData={handleChangeData}
                    myProp={myProp}
                    itemTrigger={itemTrigger}
                    caclTotal={caclTotal}
                   />
              
                
                
              ))
              

            }
          </div>
          {formData.length >= 1 ?

            (<div className='finalBuy d-flex flex-column'>
              <h1 className='mb-3'>${result}</h1>
              {/* <a id='btnFinalBuy' onClick={handleItemTrigger}  className='btn btn-primary m-3 fs-4'>Calcular</a> */}
              <a id='btnFinalBuy'  className='btn btn-primary m-3 fs-4' href={whatsappLink}>Ordenar</a>
            </div>)
            : <h1 className='text-center'>No se ha encontrado ningun producto</h1>

          }
          <button onClick={handleModal} id='btn-close' className='btn fs-1 text-light m-2'>X</button>
      </div> 
      

     



        
    </div>
  )
}

export default BoxSection