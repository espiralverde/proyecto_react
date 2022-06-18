import React from 'react'
import { useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
            <Routes>
              <Route path = "/" element = { <ItemListContainer greeting={'Bienvenidos a SteelBit'}/> } />
              <Route path = "/categ/:id" element = { <ItemListContainer /> } />
              <Route path = "/detalle/:detalleId" element  = { <ItemDetailContainer /> } />
              <Route path = "/cart" element  = { <Cart /> } />
              <Route path = "/*" element  = { <Navigate to ='/' replace /> } />
            </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
