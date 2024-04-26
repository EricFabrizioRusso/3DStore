import React, { useState, useEffect } from 'react';
import { PromImg, PromText } from '../../helpers/Imgs';
const Promotion = () => {

    const [imgIndex, setImgIndex] = useState(0);
    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
    
        const interval= setInterval(() => {

            setImgIndex((imgIndex + 1) % PromImg.length);
            setMsgIndex((msgIndex + 1) % PromText.length);
        }, 5000);

   
    

        
        

        return() => clearInterval(interval);
        
        
        
        
        
    }, [imgIndex,PromImg.length]);
    
  return (
    <div className='bg-dark rounded p-1 Cpromotion fs-5 mb-5'>
        <div className='container_img'>
            {/* <img src={PromImg[imgIndex]} alt=''/> */}
            {PromImg.map((el,index)=>
            
                <img
                    key={index}
                    src={el}
                    className={index === imgIndex ? 'active' : ''}
                    alt=''
                />

            )

            } 
        </div>
        <div className='text-center position-absolute top-50 start-50 translate-middle'>
            <p>{PromText[msgIndex]}</p>
        </div>
    </div>
  )
}

export default Promotion