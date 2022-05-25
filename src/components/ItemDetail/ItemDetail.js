import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';
import { Link } from "react-router-dom";
import Intercambiabilidad from './Intercambiabilidad';


export const ItemDetail = ({productos}) => {

    const [qty, setQty] = useState (0)

    function onAdd (cantidad){
        console.log(cantidad)
        setQty (cantidad)
    }

    return (
        
        <div className="row" >
            <p>Item detail</p>
            <div className="col">
                <img className="foto_detalle" src={productos.img} alt="foto herramienta" />
            </div>
            <div className="col">
                <h1>{productos.nombre}</h1>
                <h2>{productos.codigo}</h2>
                <p>{productos.precio}</p>
                <p>{productos.tamanio}</p>

                {
                    qty == 0
                    ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    :
                    <Intercambiabilidad />
                }
            </div>        
        </div>
    )
}


export default ItemDetail
