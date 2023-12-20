import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Logo'
import Navbar from './Components/Navbar'
import FrontPage from './Components/FrontPage'

function App() {

  return (
    <>
      <Logo/>
      <Navbar/>
      <FrontPage/>
    </>
  )
}

export default App
