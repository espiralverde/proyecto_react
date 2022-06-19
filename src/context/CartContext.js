import { createContext, useContext, useState } from "react";
import React from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext (CartContext)


const CartContextProvider = ({children}) =>{
    //estados y funciones globales
    const [cartList, setCartList] = useState([]) //Acá guardo mis productos añadidos

    //función para agregar productos
    function addToCart (item) {
        const index = cartList.findIndex(product => product.id === item.id) //pone -1 si no lo encuentra
        if (index !== -1){
            const oldQty = cartList[index].qty
            cartList[index].qty = oldQty + item.qty
            setCartList([...cartList])
        }else {
            setCartList ([
                ...cartList,
                item
            ])
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const totalQty = () => {
        return cartList.reduce((contador, prod)=> contador += prod.qty ,0)

    }

    const totalPrice = () => {
        return cartList.reduce((contador, prod)=> contador + (prod.qty * prod.price) ,0)

    }

    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            emptyCart,
            removeItem,
            totalQty,
            totalPrice
            } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider