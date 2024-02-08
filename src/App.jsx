import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxSection from './components/Main/BoxSection'
import Header from './components/Header/Header'
import Modal from './components/Main/Modal'

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header/>
      <BoxSection/>
      
      
    </>
  )
}

export default App
