import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Chi Siamo" element={<ChiSiamo />}></Route>
          <Route path="/Prodotti" element={<Prodotti />}></Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
