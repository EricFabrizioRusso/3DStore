import React, { useState } from 'react';
import Card from './Card'
import BoxSectionS from './BoxSection.module.css'




const BoxSection = () => {




  return (
    <div className='d-flex flex-wrap justify-content-center boxsection'>
        <Card /*title={title} desc={desc} img={img}*//>
        <Card /*title={title} desc={desc} img={img}*//>
        <Card /*title={title} desc={desc} img={img}*//>
        <Card /*title={title} desc={desc} img={img}*//>
        <Card /*title={title} desc={desc} img={img}*//>
        <Card /*title={title} desc={desc} img={img}*//>
        <Card /*title={title} desc={desc} img={img}*//>
    </div>
  )
}

export default BoxSection