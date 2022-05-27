import { useState } from 'react';
//import Intercambiabilidad from './Intercambiabilidad';
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../context/CartContext'


import './ItemDetail.css';
import InputCount from './Intercambiabilidad';

export const ItemDetail = ({productos}) => {

    const {addToCart, cartList} = useCartContext()
    const [cantUI, setCantUI] = useState(0)

    const onAdd = (cantidad) =>{
        //console.log(cantidad)
        addToCart ( {...productos, cantidad} )
        setCantUI(cantidad)
        //para seguir agregando en el carrito
    }
    console.log(cartList)

    

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
                    cantUI === 0
                    ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    :
                    <InputCount />
                }
            </div>        
        </div>
    )
}
export default ItemDetail
