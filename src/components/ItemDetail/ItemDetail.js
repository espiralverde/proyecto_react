import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../context/CartContext'
import InputCount from './Intercambiabilidad';
import './ItemDetail.css';


export const ItemDetail = ({productos}) => {
    const {addToCart, cartList} = useCartContext()
    const [cantUI, setCantUI] = useState(0)
    const onAdd = (cantidad) =>{
        addToCart ( {...productos, cantidad} )
        setCantUI(cantidad)
        //para seguir agregando items en el carrito
    }

    return (

                        <div className="itemDetail">
                            <div className='itemDetail__info'>
                                <img className="itemDetail__img" src={productos.img} alt="" />
                                <h3 className="itemDetail__title">{productos.nombre}</h3>
                                <p className="itemDetail__detail">Código: {productos.codigo}</p>
                                <p className="itemDetail__detail">Precio: ${productos.precio}</p>
                                <p className="itemDetail__detail">Tamaño: {productos.tamanio}</p>
                                {
                                    cantUI === 0
                                    ? 
                                    <ItemCount initial={1} stock={100} onAdd={onAdd} />
                                    :
                                    <InputCount />
                                }
                            </div>
                        </div>
    )
}
export default ItemDetail


