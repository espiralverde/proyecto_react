import { useState } from "react"
import './ItemCount.css';
import React from 'react'

function ItemCount ({stock, initial, onAdd}) {

    const [qty, setQty] = useState (initial) 
    function add (){
        if (qty < stock) setQty (qty + 1)
        else (alert ("No hay mas stock"))
    }

    function diminish (){
        if (qty > 1) setQty (qty - 1)
        else (alert ("No hay mas elementos para quitar"))
    }

    return (
            <div className="itemCount__container">
            <div className="itemCount__container__controles">
                <button className="itemCount__btnMenos" class="btn btn-outline-primary mb-2" onClick={diminish}>-</button>
                <span className="itemCount__cantidad">{qty}</span>           
                <button className="itemCount__btnMas" class="btn btn-outline-primary mb-2" onClick={add}>+</button>
            </div>
            <div className="itemCount__container__agregar">
                <button className="itemCount__agregarCarrito" class="btn btn-primary mb-5" onClick={()=> onAdd(qty)}>Agregar al carrito</button>
            </div>
        </div>
        )
}
export default ItemCount