import { useState } from "react"
import './ItemCount.css';

function ItemCount ({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState (initial) 
    
    function sumar (){
        
        if (cantidad < stock) setCantidad (cantidad + 1)
        else (alert ("No hay mas stock"))
    }
    function resta (){
        if (cantidad > 1) setCantidad (cantidad - 1)
        else (alert ("No hay mas elementos para quitar"))
    }

    return (
        <div className="itemCount__container">
            <div className="itemCount__container__controles">
                <button className="itemCount__btnMenos" onClick={resta}>-</button>
                <span className="itemCount__cantidad">{cantidad}</span>           
                <button className="itemCount__btnMas" onClick={sumar}>+</button>
            </div>
            <div className="itemCount__container__agregar">
                <button className="itemCount__agregarCarrito" onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
        )
}
export default ItemCount