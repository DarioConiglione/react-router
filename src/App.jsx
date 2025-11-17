import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import ProdottoSingolo from './pages/ProdottoSingolo';
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ChiSiamo" element={<ChiSiamo />}></Route>
          <Route path="/Prodotti" element={<Prodotti />}></Route>
          <Route path="/ProdottoSingolo/:id" element={<ProdottoSingolo />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
