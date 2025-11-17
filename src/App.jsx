import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import ProdottoSingolo from './pages/ProdottoSingolo';
import DefaultLayout from './pages/DefaultLayout';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/Prodotti" element={<Prodotti />} />
            <Route path="/Prodotti/:id" element={<ProdottoSingolo />} />
          </Route>

        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
