import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import Meni from './components/Meni/Meni.jsx'
import './App.css';

function App() {
  return (
    <>
      <Meni />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}></Route>
      </Routes>
    </>
  )
}

export default App