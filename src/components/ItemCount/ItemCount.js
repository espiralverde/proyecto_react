import { useState } from "react"
import './ItemCount.css';
import React from 'react'

function ItemCount ({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState (initial) 
    function sumar (){
        if (cantidad < stock) setCantidad (cantidad + 1)
        else (alert ("No hay mas stock"))
    }

    function restar (){
        if (cantidad > 1) setCantidad (cantidad - 1)
        else (alert ("No hay mas elementos para quitar"))
    }

    return (
            <div className="itemCount__container">
            <div className="itemCount__container__controles">
                <button className="itemCount__btnMenos" class="btn btn-outline-primary mb-2" onClick={restar}>-</button>
                <span className="itemCount__cantidad">{cantidad}</span>           
                <button className="itemCount__btnMas" class="btn btn-outline-primary mb-2" onClick={sumar}>+</button>
            </div>
            <div className="itemCount__container__agregar">
                <button className="itemCount__agregarCarrito" class="btn btn-primary mb-5" onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
        )
}
export default ItemCount