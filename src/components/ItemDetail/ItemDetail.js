import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../context/CartContext'
import InputCount from './Intercambiabilidad';
import './ItemDetail.css';


export const ItemDetail = ({products}) => {
    const {addToCart, cartList} = useCartContext()
    const [cantUI, setCantUI] = useState(0)
    const onAdd = (qty) =>{
        addToCart ( {...products, qty} )
        setCantUI(qty)
        //para seguir agregando items en el carrito
    }

    return (

                        <div className="itemDetail">
                            <div className='itemDetail__info'>
                                <img className="itemDetail__img" src={products.img} alt="" />
                                <h3 className="itemDetail__title">{products.name}</h3>
                                <p className="itemDetail__detail">Código: {products.code}</p>
                                <p className="itemDetail__detail">Precio: ${products.price}</p>
                                <p className="itemDetail__detail">Tamaño: {products.size}</p>
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


