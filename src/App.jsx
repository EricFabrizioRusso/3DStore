import './App.css'
import React from 'react';
//import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Home from './components/Home'


function App() {

  

  return (
    <>
        <Home/>
      {/* <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy/:title' element={<BuyPage/>}/>
          <Route path='*' element={<h1>Error404: Pagina no encontrada</h1>}/>
        </Routes>
      </HashRouter> */}
    </>
  )
}

export default App
