import React, { useState, useEffect, useContext } from 'react';
import Card from './Card'
import { modelEx, modelEx2, modelEx3,modelEx4 } from '../../helpers/Imgs';
import BuyPage from './Pages/BuyPage';
import BuyItem from '../BuySection/BuyItem';
import { MyContext } from '../../helpers/Context';






const BoxSection = () => {

  
  const [formData, setFormData] = useState([]);
  const {myProp, setMyProp} = useContext(MyContext)
  const {product, setProduct} = useContext(MyContext)
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
    setTriggerCard(triggerCard + 1);
    
  }
  console.log(formData,'formData')
  console.log(caclTotal,'calcTotal')
   useEffect(() => {
     
     
     if(myProp === true){
       
       buyModal.classList.remove('d-none')
       
     }else{
       
       
       
     }

     if(formData.length >= 1){

      setProduct(true)

     }else{

      setProduct(false)

     }
     
    setCaclTotal(formData)
    handleTotal();

     
   }, [myProp,formData,handleChangeData]);







  const handleModal=()=>{




   document.addEventListener('click',(e)=>{

    if(e.target.id === 'buyModal' || e.target.id === 'btn-close-buy'){

  
      buyModal.classList.add('d-none')
      setMyProp(false);
      document.body.style.overflow = '';
      console.log('click')

    }


   })

    
  }

  
  
  //const message= `Hola, quisiera encargar los siguientes productos: ${caclTotal[0]}Total: ${result}`
  //const whatsappLink=`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`

  const SendMessage=()=>{

    const phone= '+541168699670'
    let message= `Hola, quisiera encargar los siguientes productos: \nTotal: $${result}\n\n`;

    caclTotal.forEach(el=>
        {
          message+= el.title + ": X" + el.ammount + "\n"; 
        }

      )
    const whatsappLink=`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    window.open(whatsappLink)
    console.log(message);

  }






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
        <Card title={modelEx4.title} 
        desc={modelEx4.desc} 
        img={modelEx4.img}
        img2={modelEx4.img2}
        img3={modelEx4.img3}
        price={modelEx4.price}
        handleData={handleData}
        MainformData={formData}
        triggerCard={triggerCard}
        id={'ejemplo4'}
        />

     
      

      <div onClick={handleModal} id='buyModal' className='buySection d-none overflow-auto'>
          <div className='buyContainer rounded d-flex flex-column mb-5 '>

            {
              formData.map((item) =>(
              
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
              <h1 className='mb-3 bg-dark p-3 border border-primary fs-4 rounded'>Total: ${result}</h1>
              {/* <a id='btnFinalBuy' onClick={handleItemTrigger}  className='btn btn-primary m-3 fs-4'>Calcular</a> */}
              <a id='btnFinalBuy' onClick={SendMessage}  className='btn btn-primary m-3 fs-4'>Hacer pedido</a>
              <button onClick={handleModal} id='btn-close-buy' className='btn fs-1 text-light m-2'>X</button>
            </div>)

              :<div className='d-flex flex-column'>
              <button onClick={handleModal} id='btn-close-buy' className='btn fs-1 text-light m-2'>X</button>
                  <h1 id='noProducts' className='text-center'>No se ha encontrado ningun producto</h1>
              </div>
          }
      </div> 
      

     



        
    </div>
  )
}

export default BoxSection