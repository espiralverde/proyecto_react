import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';


function App() {
  const [count, setCount] = useState (0) 

  function contador () {
  setCount(count + 1)
}

  return (
    <BrowserRouter>
      <div className="App">
            <NavBar />
          <Routes>
            <Route path = "/" element = { <ItemListContainer greeting={'Bienvenidos a SteelBit'}/> } />
            <Route path = "/categoria/:id" element = { <ItemListContainer greeting={'Bienvenidos a SteelBit'}/> } />
            <Route path = "/detalle/:detalleId" element  = { <ItemDetailContainer /> } />
            <Route path = "/cart" element  = { <Cart /> } />
            
            <Route path = "/*" element  = { <Navigate to ='/' replace /> } />
          </Routes>
                {/* <ItemCount stock='5' initial='1' /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
