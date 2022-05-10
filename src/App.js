import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  
  const [count, setCount] = useState (0) 

  function contador () {
  setCount(count + 1)
}

  return (
    <div className="App">
      e-commerce App
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a SteelBit'}/>
      <input placeholder='Buscá tu herramienta'></input>
      {count}
      <button onClick={contador}>Cantidad de busquedas</button>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ItemCount stock='5' initial='1' />
    </div>
  );
}
export default App;
