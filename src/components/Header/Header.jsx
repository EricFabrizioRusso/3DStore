import React from 'react';
import HeaderS from './Header.module.css';
import NavBar from './NavBar/NavBar';
import Links from './Links/Links';

const Header = () => {
  return (
    <div className='bg-secondary sticky-top fs-6'>
      <div className=' mb-5 p-1  '>
          <NavBar/>
      </div>

    </div>
  )
}

export default Header