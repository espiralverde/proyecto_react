import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
//import { Formulario } from './components/Formulario/Formulario';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  // const tit = 'Soy titulo de App'
  // const subTit = 'Soy sub-titulo de App'

  return (
    
    <div className="App">
      e-commerce App
      <NavBar />
      {/* <ItemListContainer  /> */}
      <ItemListContainer greeting={'Bienvenidos a SteelBit'}/>
      <input placeholder='Buscá tu herramienta'></input>
      <button>Buscar</button>

    </div>
  );
}
export default App;
