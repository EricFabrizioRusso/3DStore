import React from 'react';
import HeaderS from './Header.module.css';
import NavBar from './NavBar/NavBar';
import Links from './Links/Links';

const Header = () => {
  return (
    <div className='bg-secondary'>
      <div className='text-center mb-5 p-1 sticky-top d-flex flex-row justify-content-between container-xxl '>
          <NavBar/>
          <Links/>
      </div>

    </div>
  )
}

export default Header