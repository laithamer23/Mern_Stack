import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Routes } from 'react-router-dom'
import Display from './components/Display'
import Form from './components/Form'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  

  return (
    <>
    <Form/>
    
    <Routes>
      <Route path='/:category/:id' element={<Display/>}/>
    </Routes>
    </>
  )
}

export default App

